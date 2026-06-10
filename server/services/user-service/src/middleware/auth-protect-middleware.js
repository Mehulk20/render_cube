const jwt = require('jsonwebtoken');

const { promisify } = require('util');

const authService = require('../services/auth-service');

const catchAsyncError = require('./catch-async-error');

const AppError = require('./app-error');

exports.protect = catchAsyncError(async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) return next(new AppError('Unauthorized access', 401));

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  if (!decoded.id) return next(new AppError('user does not exist, please retry login', 401));

  const authReponse = await authService.validateAuthUser(decoded.id);

  const { result } = authReponse.data;

  if (!result.active) return next(new AppError('User not found', 403));

  if (result.tokenVersion !== decoded.tokenVersion)
    return next(new AppError('Token invalidated, try re-login', 401));

  req.user = decoded;
  next();
});
