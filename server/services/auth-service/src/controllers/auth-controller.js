const { AppError, catchAsyncError, successResponse, HTTP_STATUS } = require('@rendercube/shared');

const authService = require('../services/auth-service');

exports.getAllCredentials = catchAsyncError(async (req, res, next) => {
  const result = await authService.getUsers();

  if (result.length == 0) return next(new AppError('No data found', HTTP_STATUS.BAD_REQUEST));

  res.status(200).json({
    status: 'success',
    data: result,
  });
});

exports.register = catchAsyncError(async (req, res) => {
  const result = await authService.registerUser(req.body);

  res.cookie('jwt', result.accessToken, {
    httpOnly: true,
    secure: false,
    expires: new Date(Date.now() + Number(process.env.JWT_COOKIE_EXPIRES_IN) * 60 * 60 * 1000), // 7 days
  });

  const { ...response } = result.data;

  return successResponse({
    res,
    message: 'welcome to rendercube',
    data: { accessToken: result.token, user: response },
  });
});

exports.login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) return next(new AppError('Please provide email and password', 400));

  const result = await authService.loginUser(email, password);
  const { passwordHash, emailVerified, ...data } = result.user;

  return successResponse({
    res,
    message: '',
    data: { accessToken: result.token, user: data },
  });
});

exports.validateUser = catchAsyncError(async (req, res) => {
  const result = await authService.validateAuthUser(req.params.id);

  return successResponse({
    res,
    statusCode: HTTP_STATUS.OK,
    message: 'User validated successfully',
    data: result,
  });
});

exports.logout = catchAsyncError(async (req, res) => {
  await authService.revokeUserToken(req.user.userId);

  res.clearCookie('jwt', {
    httpOnly: true,
    secure: false,
  });

  return successResponse({
    res,
    statusCode: HTTP_STATUS.OK,
    message: 'Logout successful',
  });
});

exports.forgotPassword = catchAsyncError(async (req, res) => {
  await authService.forgotPassword(req.body.email);

  return successResponse({
    res,
    statusCode: HTTP_STATUS.OK,
    message: 'Password reset link sent to your email',
  });
});

exports.resetPassword = catchAsyncError(async (req, res) => {
  await authService.resetPassword(req.params.token, req.body);

  return successResponse({
    res,
    statusCode: HTTP_STATUS.OK,
    message: 'Password reset successful',
  });
});

exports.updateUserEmail = catchAsyncError(async (req, res) => {
  const { email, password } = req.body;

  await authService.updateEmail(req.user.userId, { email, password });

  return successResponse({
    res,
    statusCode: HTTP_STATUS.OK,
    message: 'Email updated successfully',
  });
});

exports.updateUserPassword = catchAsyncError(async (req, res) => {
  const { password, newPassword, newConfirmPassword } = req.body;

  const result = await authService.updateUserPassword(req.user.userId, {
    password,
    newPassword,
    newConfirmPassword,
  });

  return successResponse({
    res,
    statusCode: HTTP_STATUS.OK,
    message: 'Password updated successfully',
    data: {
      user: result.user,
      accessToken: result.token,
    },
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
