const jwt = require('jsonwebtoken');

const { promisify } = require('util');
const {
  AppError,
  catchAsyncError,
  HTTP_STATUS,
  extractBearerToken,
} = require('@rendercube/shared');
const authService = require('../services/auth-service');

exports.validateToken = catchAsyncError(async (req, res, next) => {
  const token = extractBearerToken(req);

  if (!token) {
    return next(
      new AppError('You are not logged in. Please log in to get access.', HTTP_STATUS.UNAUTHORIZED)
    );
  }
  console.log(token);
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

  res.status(200).json({
    status: 'success',
    data: {
      user: {
        userId: currentUser.userId,
        email: currentUser.email,
        role: currentUser.role,
        passwordChangedAt: currentUser.passwordChangedAt,
        active: currentUser.active,
      },
    },
  });
});
