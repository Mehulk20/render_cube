const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const authRepo = require('../repository/auth-repo');
const AppError = require('../middleware/app-error');

const generateToken = payload => {
  return jwt.sign(
    { userId: payload.userId, role: payload.role, tokenVersion: payload.tokenVersion },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};

exports.createAndSendToken = user => {
  return generateToken(user);
};

exports.hashToken = token => {
  return crypto.createHash('sha256').update(token).digest('hex');
};

exports.generatePasswordResetToken = () => {
  const restToken = crypto.randomBytes(32).toString('hex');

  const hashedToken = crypto.createHash('sha256').update(restToken).digest('hex');

  const expiresAt = Date.now() + 10 * 60 * 1000;

  return {
    restToken,
    hashedToken,
    expiresAt,
  };
};
