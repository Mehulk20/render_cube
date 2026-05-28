const jwt = require('jsonwebtoken');

const { promisify } = require('util');

const AppError = require('./appError');

exports.protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) throw new AppError('Unauthorized access', 401);

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  if (!decoded.id) throw new AppError('user does not exist, please retry login', 401);

  req.user = decoded;
  next();
};
