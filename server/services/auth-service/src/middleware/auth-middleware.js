const jwt = require('jsonwebtoken');

const { promisify } = require('util');

const { AppError, catchAsyncError, HTTP_STATUS } = require('@rendercube/shared');

const authService = require('../services/auth-service');

exports.protect = catchAsyncError(async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(
      new AppError('You are not logged in. Please log in to get access.', HTTP_STATUS.UNAUTHORIZED)
    );
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const tokenIssuedAt = decoded.iat * 1000;

  const currentUser = await authService.validateAuthUser(decoded.userId);

  if (!currentUser) {
    return next(new AppError('User no longer exists.', HTTP_STATUS.UNAUTHORIZED));
  }

  if (!currentUser.active) {
    return next(new AppError('Account is deactivated.', HTTP_STATUS.UNAUTHORIZED));
  }

  if (currentUser.passwordChangedAt?.getTime() > tokenIssuedAt) {
    throw new AppError('Password recently changed. Please login again.', HTTP_STATUS.UNAUTHORIZED);
  }

  if (decoded.tokenVersion !== currentUser.tokenVersion) {
    return next(
      new AppError('Token has been invalidated, please log in again.', HTTP_STATUS.UNAUTHORIZED)
    );
  }

  req.user = currentUser;
  next();
});
