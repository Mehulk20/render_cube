const crypto = require('crypto');

const { AppError, HTTP_STATUS } = require('@rendercube/shared');

const authRepo = require('../repository/auth-repo');
const userClient = require('../client/user-client');
const passwordManager = require('../utils/password-manager');
const tokenManager = require('../utils/token-manager');
const emailer = require('../utils/emailer');

exports.getUsers = async () => {
  const users = await authRepo.getAllUsers();

  return users;
};

exports.registerUser = async (data) => {
  const { password, confirmPassword, email, username, name } = data;

  // Validate input first
  passwordManager.checkCorrectPassword(password, confirmPassword);

  const passwordHash = await passwordManager.hashPassword(password);

  const userId = `usr_${crypto.randomUUID()}`;

  let authUser;
  let profile;

  try {
    // Rely on MongoDB unique indexes instead of pre-checking
    authUser = await authRepo.createCredential({
      userId,
      email,
      username,
      passwordHash,
    });

    profile = await userClient.createUserProfile({
      userId,
      email,
      username,
      name,
    });

    const token = tokenManager.createAndSendToken(authUser);

    return {
      data: profile.result,
      token,
    };
  } catch (err) {
    // Duplicate email / username
    if (err?.code === 11000) {
      const field = Object.keys(err.keyPattern || {})[0];

      throw new AppError('Validation Error', HTTP_STATUS.BAD_REQUEST, {
        [field]: `${field} already exists`,
      });
    }

    // Rollback (best effort)
    await Promise.allSettled([
      authRepo.deleteCredentialByEmail(email),
      userClient.deleteUserProfile(email),
    ]);

    console.error('REGISTER ERROR:', err);

    throw new AppError('Failed to register user', HTTP_STATUS.INTERNAL_SERVER_ERROR);
  }
};

exports.loginUser = async (identifier, password) => {
  const user = await authRepo.findByIdentifier(identifier);

  if (!user || !user.active) {
    throw new AppError(
      'Incorrect email or password or Account suspended',
      HTTP_STATUS.UNAUTHORIZED
    );
  }
  console.log(user);
  if (!(await passwordManager.comparePassword(password, user.passwordHash))) {
    throw new AppError('Invalid email or password', HTTP_STATUS.UNAUTHORIZED);
  }

  const token = tokenManager.createAndSendToken(user);

  if (!token) {
    throw new AppError('Failed to generate token', HTTP_STATUS.INTERNAL_SERVER_ERROR);
  }

  return { token, user };
};

exports.forgotPassword = async (email) => {
  const user = await authRepo.findOneByEmail(email);

  if (!user) {
    throw new AppError('No user found', HTTP_STATUS.BAD_REQUEST);
  }

  const { resetToken, hashedToken, expiresAt } = tokenManager.generatePasswordResetToken();

  await authRepo.findOneAndUpdate(user.userId, {
    passwordResetToken: hashedToken,
    passwordResetTimeout: expiresAt,
  });

  const resetUrl = `${process.env.CLIENT_URL}/rest-password/${resetToken}`;

  await emailer.sendPasswordResetEmail(user, resetUrl);

  return true;
};

exports.resetPassword = async (token, content) => {
  const { password, confirmPassword } = content;

  const hashedToken = tokenManager.hashToken(token);

  const user = await authRepo.findOneByResetToken(hashedToken);

  if (!user) {
    throw new AppError('Invalid token', HTTP_STATUS.BAD_REQUEST);
  }

  if (user.passwordResetTimeout < Date.now()) {
    throw new AppError('Reset password time out, re-try forgot password', HTTP_STATUS.BAD_REQUEST);
  }

  await passwordManager.checkCorrectPassword(password, confirmPassword);

  const hashedPassword = await passwordManager.hashPassword(password);

  user.passwordHash = hashedPassword;

  user.passwordResetToken = undefined;

  user.passwordResetTimeout = undefined;

  user.passwordChangedAt = Date.now();

  user.tokenVersion += 1;

  await user.save();

  return user;
};

exports.updateEmail = async (userId, payload) => {
  const { email, password } = payload;

  const [existing, user] = await Promise.all([
    authRepo.findOneByEmail(email),
    authRepo.getCredentialByUserId(userId),
  ]);

  if (existing && existing.userId.toString() !== userId.toString()) {
    throw new AppError('Email already exist, please use a different email', HTTP_STATUS.CONFLICT);
  }

  if (user.email === email) {
    throw new AppError(
      'New email must be different from the current email.',
      HTTP_STATUS.BAD_REQUEST
    );
  }

  if (!user && !user.active) {
    throw new AppError('user does not exist or has been suspended', HTTP_STATUS.NOT_FOUND);
  }

  const isCorrect = await passwordManager.comparePassword(password, user.passwordHash);

  if (!isCorrect) {
    throw new AppError(
      'Password does not match, please try with correct password',
      HTTP_STATUS.UNAUTHORIZED
    );
  }

  await authRepo.findOneAndUpdate(userId, { email });

  try {
    await userClient.updateUserProfile(userId, { email });
  } catch (err) {
    throw new AppError(`failed updated user ${err}`, HTTP_STATUS.BAD_REQUEST);
  }

  return true;
};

exports.updateUserPassword = async (userId, payload) => {
  const { password, newPassword, newConfirmPassword } = payload;

  const user = await authRepo.getCredentialByUserId(userId);

  if (!user || !user.active)
    throw new AppError('User not found or has been suspended, re-try login', HTTP_STATUS.NOT_FOUND);

  passwordManager.checkCorrectPassword(newPassword, newConfirmPassword);

  const isCorrect = await passwordManager.comparePassword(password, user.passwordHash);

  if (!isCorrect)
    throw new AppError(
      'Password does not match, please try with correct password',
      HTTP_STATUS.UNAUTHORIZED
    );

  const isSamePassword = await passwordManager.comparePassword(newPassword, user.passwordHash);

  if (isSamePassword)
    throw new AppError('Password already in use, type in new password', HTTP_STATUS.CONFLICT);

  const hashedPassword = await passwordManager.hashPassword(newPassword);

  const updatedUser = await authRepo.findOneAndUpdatePassword(userId, hashedPassword);

  if (!updatedUser)
    throw new AppError('Failed to update password', HTTP_STATUS.INTERNAL_SERVER_ERROR);

  const token = tokenManager.createAndSendToken(updatedUser);

  return {
    token,
    user: {
      userId: updatedUser.userId,
      username: updatedUser.username,
      email: updatedUser.email,
      role: updatedUser.role,
    },
  };
};

exports.validateAuthUser = async (id) => {
  return await authRepo.getCredentialByUserId(id);
};

exports.revokeUserToken = async (userId) => {
  return await authRepo.findOneAndUpdateTokenVersion(userId);
};
