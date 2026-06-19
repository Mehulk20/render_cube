const crypto = require('crypto');

const authRepo = require('../repository/auth-repo');
const userService = require('./user-service');
const passwordManager = require('../utils/password-manager');
const tokenManager = require('../utils/token-manager');
const emailer = require('../utils/emailer');

const AppError = require('../middleware/app-error');

exports.getUsers = async () => {
  const users = await authRepo.getAllUsers();

  return users;
};

exports.registerUser = async data => {
  const { email, password, confirmPassword, role, ...userData } = data;
  const existingUser = await authRepo.getCredentialByEmail(email);

  if (existingUser) {
    throw new AppError('Email already exists', 400);
  }

  passwordManager.checkCorrectPassword(password, confirmPassword);

  const hashedPassword = await passwordManager.hashPassword(password);

  const userID = `usr_${crypto.randomUUID()}`;

  let user;

  try {
    const authUser = await authRepo.createCredential({
      userId: userID,
      email,
      passwordHash: hashedPassword,
      role,
    });

    user = await userService.createAuthUser({
      userId: userID,
      email: email,
      ...userData,
    });

    if (!authUser || !user) {
      throw new AppError(`${(user, authUser)} Failed to create user`, 500);
    }
  } catch (err) {
    console.error('REGISTER ERROR:', err);
    await authRepo.deleteCredentialByEmail(email);
    await userService.deleteAuthUser(email);

    user = null;

    throw new AppError('Error while adding user', 500);
  }

  const token = tokenManager.createAndSendToken(user);

  return { data: user.data, token };
};

exports.loginUser = async (email, password) => {
  const user = await authRepo.getCredentialByEmail(email);

  if (!user.active) {
    throw new AppError('Account suspended', 403);
  }
  console.log(user.passwordHash, password, user.tokenVersion, user.active);
  if (!(await passwordManager.comparePassword(password, user.passwordHash))) {
    throw new AppError('Invalid email or password', 401);
  }

  const token = tokenManager.createAndSendToken(user);

  return { token, user };
};

exports.forgotPassword = async email => {
  const user = await authRepo.findOneByEmail(email);

  if (!user) {
    throw new AppError('No user found', 400);
  }

  const { restToken, hashedToken, expiresAt } = tokenManager.generatePasswordResetToken();

  await authRepo.findOneAndUpdate(user.userId, {
    passwordResetToken: hashedToken,
    passwordResetTimeout: expiresAt,
  });

  const resetUrl = `${process.env.CLIENT_URL}/rest-password/${restToken}`;

  await emailer.sendPasswordResetEmail(user, resetUrl);

  return true;
};

exports.resetPassword = async (token, content) => {
  const { password, confirmPassword } = content;

  const hashedToken = tokenManager.hashToken(token);

  const user = await authRepo.findOneByResetToken(hashedToken);

  if (!user) {
    throw new AppError('Invalid token', 400);
  }

  if (user.passwordResetTimeout < Date.now()) {
    throw new AppError('Reset password time out, re-try forgot password', 400);
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

exports.validateAuthUser = async id => {
  return await authRepo.getCredentialByUserId(id);
};

exports.revokeUserToken = async userId => {
  return await authRepo.findOneAndUpdateTokenVersion(userId);
};
