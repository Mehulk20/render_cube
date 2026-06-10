const jwt = require('jsonwebtoken');

const { promisify } = require('util');

const authService = require('../services/auth-service');
const catchAsync = require('./catch-async-error');
const AppError = require('./app-error');

exports.protect = catchAsync(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) return next(new AppError('unauthrized access', 401));

  const { id, ...decoded } = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  if (!id) return next(new AppError('user does not exist, please re-try login', 401));

  const authResponse = await authService.validateAuthUser(id);

  const { result } = { ...authResponse.data };

  if (!result.active) return next(new AppError('user not found', 403));

  if (result.tokenVersion !== decoded.tokenVersion)
    return next(new AppError('invalidated token', 401));

  req.user = {
    ...decoded,
    id: result._id,
    role: result.role,
    tokenVersion: result.tokenVersion,
    active: result.active,
  };

  next();
});
