const passwordManager = require('../utils/passwordManager');
const jwt = require('../utils/jwt');
const credentialRepo = require('../repository/credentialRepo');

const userService = require('../services/userService');

const AppError = require('../middleware/appError');

const sendEmail = require('../utils/emailer');

//signup logic
exports.signup = async data => {
  const { email, username, password, confirmPassword, role, ...userData } = data;

  // Validate password confirmation
  passwordManager.comparePasswords(password, confirmPassword);

  const existing = await credentialRepo.findExistingUser(email);

  if (existing) throw new AppError('User already exists', 400);

  const passwordHash = await passwordManager.hash(password);

  // Create user in user service
  const user = await userService.createUser({ email, username, ...userData });

  const userId = user.data._id;

  const authData = await credentialRepo.createCredentials({
    _id: userId,
    username,
    email,
    passwordHash,
    role,
  });

  const token = jwt.createAndReturnToken(authData);

  return {
    token,
    user: authData,
  };
};

exports.login = async data => {
  const { email, password } = data;

  if (!email || !password)
    throw new AppError('please type in your email and password to login', 400);

  const user = await credentialRepo.findUserForLogin(email);

  if (!user || !(await passwordManager.checkCorrectPassword(password, user.passwordHash))) {
    throw new AppError('Incorrect email or password', 401);
  }

  if (!user.active) {
    throw new AppError('Account Suspended', 403);
  }

  const token = jwt.createAndReturnToken(user);

  return { token };
};

exports.forgotPassword = async ({ email, origin }) => {
  const user = await credentialRepo.findUserForForgotPassword(email);

  if (!user) {
    throw new AppError('No user found with this email', 404);
  }

  const resetToken = passwordManager.createResetPasswordToken(user);

  await user.save({ validateBeforeSave: false });

  // const resetURL = `${data.protocol}://${data.get('host')}/resetPassword/${resetToken}`;

  const message = `Please click on the below rest link to rest your passowrd:\n ${origin}/resetPassword/${resetToken}`;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Password rest email (valid for 10 minutes)',
      message,
    });

    return {
      message: 'Password reset email has been sent to your email address',
    };
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetTimeout = undefined;
    user.save({ validateBeforeSave: false });

    throw new AppError('An unexpected error occured, please try again', 500);
  }
};

exports.resetPassword = async ({ token, password, confirmPassword }) => {
  passwordManager.comparePasswords(password, confirmPassword);

  const hashedToken = passwordManager.hashToken(token);

  const user = await credentialRepo.findUserForPasswordReset({ passwordResetToken: hashedToken });

  if (!user) throw new AppError('token expired, re-try forgot passoword', 400);

  const hashedPassword = await passwordManager.hash(password);

  user.passwordHash = hashedPassword;

  user.passwordResetToken = undefined;
  user.passwordResetTimeout = undefined;

  await user.save();

  const tokenData = jwt.createAndReturnToken(user);

  return tokenData;
};

exports.logout = async userId => {
  const user = await credentialRepo.findUserForLogout(userId);

  if (!user) {
    throw new AppError('User not found', 404);
  }

  user.tokenVersion += 1;

  await user.save();

  return true;
};

exports.suspendCredential = async userId => {
  const user = await credentialRepo.suspendAuthUser(userId);

  if (!user) {
    throw new AppError('User not found', 404);
  }

  return user;
};

//admin services

exports.restoreCredential = async userId => {
  const user = await credentialRepo.restoreAuthUser(userId);

  if (!user) {
    throw new AppError('User not found', 404);
  }

  return user;
};
