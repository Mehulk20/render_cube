const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const generateToken = (payload) => {
  return jwt.sign(
    { userId: payload.userId, role: payload.role, tokenVersion: payload.tokenVersion },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};

exports.createAndSendToken = (user) => {
  return generateToken(user);
};

exports.hashToken = (token) => {
  return crypto.createHash('sha256').update(token).digest('hex');
};

exports.generatePasswordResetToken = () => {
  const resetToken = crypto.randomBytes(32).toString('hex');

  const hashedToken = exports.hashToken(resetToken);

  const expiresAt = Date.now() + 10 * 60 * 1000;

  return {
    resetToken,
    hashedToken,
    expiresAt,
  };
};
