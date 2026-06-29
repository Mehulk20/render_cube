const bcrypt = require('bcrypt');
const AppError = require('../middleware/app-error');

exports.hashPassword = async password => {
  const saltRounds = 12;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

exports.checkCorrectPassword = async (password, confirmPassword) => {
  if (!password || !confirmPassword) {
    throw new AppError('Password and confirmPassword are required', 400);
  }

  if (password !== confirmPassword) {
    throw new AppError('Password and confirmPassword do not match', 400);
  }

  return true;
};

exports.comparePassword = async (password, passwordHash) => {
  const isMatch = await bcrypt.compare(password, passwordHash);
  return isMatch;
};
