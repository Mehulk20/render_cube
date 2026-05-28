const bcrypt = require('bcrypt');

const crypto = require('crypto');

const AppError = require('../middleware/appError');

exports.hash = async password => {
  return await bcrypt.hash(password, 12);
};

exports.hashToken = function (token) {
  return crypto.createHash('sha256').update(token).digest('hex');
};

exports.checkCorrectPassword = async function (inputedPassowrd, userPasswordHashed) {
  return await bcrypt.compare(inputedPassowrd, userPasswordHashed);
};

exports.changedPasswordAfter = function (user, JWTTimestamp) {
  if (user.passwordChangedAt) {
    const changedTimeStamp = parseInt(user.passwordChangedAt.getTime() / 1000, 10);

    return changedTimeStamp > JWTTimestamp;
  }

  return false;
};

exports.createResetPasswordToken = function (user) {
  const resetToken = crypto.randomBytes(32).toString('hex');

  const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');

  user.passwordResetToken = hashedToken;
  user.passwordResetTimeout = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

exports.comparePasswords = function (password, confirmPassword) {
  if (!password || !confirmPassword)
    throw new AppError('Password and confirm password are required', 400);

  if (password !== confirmPassword) throw new AppError('Passwords do not match', 400);

  return true;
};
