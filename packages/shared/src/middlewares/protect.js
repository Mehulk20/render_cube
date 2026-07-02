const { AppError } = require('../errors');
const catchAsyncError = require('./catch-async-error');
const { extractBearerToken } = require('../helpers');
const { validateToken } = require('../clients');
const { HTTP_STATUS } = require('../config');

exports.protect = catchAsyncError(async (req, res, next) => {
  const token = extractBearerToken(req);

  if (!token) {
    return next(
      new AppError('You are not logged in. Please log in to continue.', HTTP_STATUS.UNAUTHORIZED)
    );
  }

  const authUser = await validateToken(token);

  req.user = authUser;

  next();
});
