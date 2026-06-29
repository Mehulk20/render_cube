const jwt = require('jsonwebtoken');

const { promisify } = require('util');
const { AppError, catchAsyncError } = require('@rendercube/shared');
const authService = require('../services/auth-service');

exports.validateToken = catchAsyncError(async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new AppError('You are not logged in. Please log in to get access.', 401));
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const tokenIssuedAt = decoded.iat * 1000;

  const currentUser = await authService.validateAuthUser(decoded.userId);

  if (!currentUser) {
    return next(new AppError('User no longer exists.', 401));
  }

  if (!currentUser.active) {
    return next(new AppError('Account is deactivated.', 401));
  }

  if (currentUser.passwordChangedAt?.getTime() > tokenIssuedAt) {
    throw new AppError('Password recently changed. Please login again.', 401);
  }

  if (decoded.tokenVersion !== currentUser.tokenVersion) {
    return next(new AppError('Token has been invalidated, please log in again.', 401));
  }

  res.status(200).json({
    status: 'success',
    data: {
      user: {
        userId: currentUser.userId,
        email: currentUser.email,
        role: currentUser.role,
        passwordChangedAt: currentUser.passwordChangedAt,
        active: currentUser.active
      }
    }
  });
});
