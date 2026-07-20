const { AppError, catchAsyncError } = require('@rendercube/shared');
const userService = require('../services/user-service');

exports.getUsers = catchAsyncError(async (req, res, next) => {
  const users = await userService.getUsers();

  if (users.length == 0) return next(new AppError('No data found', 400));

  res.status(200).json({
    status: 'success',
    data: users,
  });
});

exports.createUser = catchAsyncError(async (req, res, next) => {
  const result = await userService.createUser(req.body);

  if (!result) return next(new AppError('requested data not found', 400));

  res.status(201).json({
    status: 'success',
    result,
  });
});

exports.getMe = catchAsyncError(async (req, res, next) => {
  const user = await userService.getUserById(req.user.userId);

  if (!user) return next(new AppError('No profile found', 404));

  if (user.status !== 'active') return next(new AppError('Account suspended', 403));

  res.status(200).json({
    status: 'success',
    data: user,
  });
});

exports.updateMe = catchAsyncError(async (req, res, next) => {
  const result = await userService.updateUserProfile(req.user.userId, req.body);

  if (!result) return next(new AppError('No profile found update', 404));

  res.status(200).json({
    status: 'success',
    data: result,
  });
});

exports.suspendMe = catchAsyncError(async (req, res, next) => {
  const result = await userService.suspendUser(req.user.userId);

  if (!result) return next(new AppError('user suspenstion failed, retry', 400));

  res.status(200).json({
    status: 'success',
    message: 'Account suspended',
  });
});

exports.deleteMe = catchAsyncError(async (req, res) => {
  await userService.deleteAccount(req.body.email);

  res.status(200).json({
    status: 'success',

    message: 'Account suspended successfully',
  });
});

//admin controller

exports.restoreAccount = catchAsyncError(async (req, res, next) => {
  await userService.restoreAccount(req.params.userId);

  res.status(200).json({
    status: 'success',
    message: 'account restored',
  });
});

//development use only
exports.importAllData = catchAsyncError(async (req, res, next) => {
  const users = await userService.importAllData(req.body);

  if (!users) return next(new AppError('user creation failed, re-try', 400));

  res.status(201).json({
    status: 'success',
    message: 'All users imported successfully',
    count: users.length,
  });
});

exports.deleteAllData = async (req, res, next) => {
  if (!(await userService.deleteAllData())) return next(new AppError('user deletion failed', 400));

  res.status(200).json({
    message: 'All users has been removed from the database, thank you!',
  });
};
