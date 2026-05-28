const jwt = require('jsonwebtoken');

//token generator
const signToken = user => {
  return jwt.sign(
    { id: user._id, role: user.role, tokenVersion: user.tokenVersion },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};

//sending token
exports.createAndReturnToken = user => {
  return signToken(user);
};
