const jwt = require('jsonwebtoken');

const { promisify } = require('util');

const AppError = require('../utils/app-error');
const catchAsyncError = require('../utils/catch-async-error');
const authClient = require('../services/auth-client');

exports.protect = catchAsyncError(async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new AppError('You are not logged in. Please log in to get access.', 401));
  }
 
  const currentUser = await authClient.validateToken(token);

  req.user = currentUser;
  next();
});
