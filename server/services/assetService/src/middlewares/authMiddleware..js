const jwt = require('jsonwebtoken');

const { promisify } = require('util');

const authService = require('../services/authService');
const catchAsync = require('./catchAsyncError');
const AppError = require('./appError');

exports.protect = catchAsync(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) return next(new AppError('unauthrized access', 401));

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  if (!decoded.id) return next(new AppError('user does not exist, please re-try login', 401));

  const authResponse = await authService.validateAuthUser(decoded.id);

  const authData = authResponse.data.data;

  if (!authData.active) return next(new AppError('user not found', 403));

  if (authData.tokenVersion !== decoded.tokenVersion)
    return next(new AppError('invalidated token', 401));

  req.user = {
    ...decoded,
    id: authData.id,
    role: authData.role,
    tokenVersion: authData.tokenVersion,
  };

  next();
});
