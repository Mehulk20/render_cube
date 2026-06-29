const { AppError, catchAsyncError } = require('@rendercube/shared');

const authService = require('../services/auth-service');
// const catchAsyncError = require('../middleware/catch-async-error');
// const AppError = require('../middleware/app-error');

exports.getAllCredentials = catchAsyncError(async (req, res, next) => {
  const result = await authService.getUsers();

  if (result.length == 0) return next(new AppError('No data found', 400));

  res.status(200).json({
    status: 'success',
    data: result
  });
});

exports.register = catchAsyncError(async (req, res, next) => {
  const result = await authService.registerUser(req.body);

  if (!result) return next(new AppError('requested data not found', 400));

  res.cookie('jwt', result.token, {
    httpOnly: true,
    secure: false,
    expires: new Date(Date.now() + Number(process.env.JWT_COOKIE_EXPIRES_IN) * 60 * 60 * 1000) // 7 days
  });

  const { ...response } = result.data;

  res.status(201).json({
    status: 'success',
    response,
    token: result.token
  });
});

exports.login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) return next(new AppError('Please provide email and password', 400));

  const result = await authService.loginUser(email, password);
  const { passwordHash, emailVerified, ...data } = result.user;

  res.status(200).json({
    status: 'success',
    data: data,
    token: result.token
  });
});

exports.validateUser = catchAsyncError(async (req, res, next) => {
  const result = await authService.validateAuthUser(req.params.id);

  if (!result) return next(new AppError('User not found', 404));

  res.status(200).json({
    status: 'success',
    data: result
  });
});

exports.logout = catchAsyncError(async (req, res, next) => {
  const result = await authService.revokeUserToken(req.user.userId);

  if (!result) return next(new AppError('Logout failed, retry', 400));

  res.clearCookie('jwt', {
    httpOnly: true,
    secure: false
  });

  res.status(200).json({
    status: 'success',
    message: 'Logout successful'
  });
});

exports.forgotPassword = catchAsyncError(async (req, res, next) => {
  const result = await authService.forgotPassword(req.body.email);

  if (!result)
    return next(new AppError('Something went wrong, please re-try forgot passoword', 404));

  res.status(200).json({
    status: 'success',
    message: 'Password reset email sent successfully, please check your inbox'
  });
});

exports.resetPassword = catchAsyncError(async (req, res, next) => {
  const result = await authService.resetPassword(req.params.token, req.body);

  if (!result) {
    return next(new AppError('Something went wrong, please re-try', 400));
  }

  res.status(200).json({
    status: 'success',
    message: 'Password reset successful. Please login again.'
  });
});

exports.updateUserEmail = catchAsyncError(async (req, res) => {
  const { email, password } = req.body;

  await authService.updateEmail(req.user.userId, { email, password });

  res.status(200).json({
    status: 'success',
    message: 'email updated successfully'
  });
});

exports.updateUserPassword = catchAsyncError(async (req, res, next) => {
  const { password, newPassword, newConfirmPassword } = req.body;

  const result = await authService.updateUserPassword(req.user.userId, {
    password,
    newPassword,
    newConfirmPassword
  });

  if (!result.token) return next(new AppError('password change request fail, please re-try', 400));

  res.status(200).json({
    status: 'success',
    message: 'password update successful',
    user: result.user,
    token: result.token
  });
});
// //admin controller

// exports.restoreAccount = catchAsyncError(async (req, res, next) => {
//   await authService.restoreAccount(req.params.id);

//   res.status(200).json({
//     status: 'success',
//     message: 'account restored',
//   });
// });

// //development use only
// exports.importAllData = catchAsyncError(async (req, res, next) => {
//   const users = await authService.importAllData(req.body);

//   if (!users) return next(new AppError('user creation failed, re-try', 400));

//   res.status(201).json({
//     status: 'success',
//     message: 'All users imported successfully',
//     count: users.length,
//   });
// });

// exports.deleteAllData = async (req, res, next) => {
//   if (!(await authService.deleteAllData())) return next(new AppError('user deletion failed', 400));

//   res.status(200).json({
//     message: 'All users has been removed from the database, thank you!',
//   });
// };
