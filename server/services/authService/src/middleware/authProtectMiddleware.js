const jwt = require('jsonwebtoken');

const { promisify } = require('util');

const credentialRepo = require('../repository/credentialRepo');

const AppError = require('../middleware/appError');

const catchAsyncError = require('../middleware/catchAsyncError');

exports.validateTokenVersion = catchAsyncError(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new AppError('Unauthorized access', 401));
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const authUser = await credentialRepo.findAuthUserById(decoded.id);

  if (!authUser) {
    return next(new AppError('User no longer exists', 401));
  }

  if (!authUser.active) {
    return next(new AppError('Account Suspended', 403));
  }

  console.log(authUser.tokenVersion, decoded.tokenVersion);
  if (authUser.tokenVersion !== decoded.tokenVersion) {
    return next(new AppError('Token invalidated', 401));
  }

  req.user = decoded;
  next();
});
