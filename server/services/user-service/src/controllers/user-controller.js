const userService = require('../services/user-service');
const catchAsyncError = require('../middleware/catch-async-error');
const AppError = require('../middleware/app-error');

exports.getUsers = catchAsyncError(async (req, res, next) => {
  const users = await userService.getUsers();
  console.log(users);
  if (users.length == 0) return next(new AppError('No data found', 400));

  res.status(200).json({
    status: 'success',
    data: users,
  });
});

exports.createUser = catchAsyncError(async (req, res, next) => {
  const newUser = await userService.createUser(req.body);
  if (!newUser) return next(new AppError('requested data not found', 400));
  res.status(201).json({
    status: 'success',
    data: newUser,
  });
});

exports.getProfile = catchAsyncError(async (req, res, next) => {
  const user = await userService.getUserById(req.user.id);

  if (!user) return next(new AppError('No profile found', 404));

  if (user.status !== 'active') return next(new AppError('Account suspended', 403));

  res.status(200).json({
    status: 'success',
    data: user,
  });
});

exports.updateAuthUser = catchAsyncError(async (req, res, next) => {
  const result = await userService.updateUserProfile(req.user.id, req.body);

  if (!result) return next(new AppError('No profile found update', 404));

  res.status(200).json({
    status: 'success',
    data: result,
  });
});

exports.deleteAccount = catchAsyncError(async (req, res, next) => {
  await userService.deleteAccount(req.user.id);

  res.status(200).json({
    status: 'success',

    message: 'Account suspended successfully',
  });
});

//admin controller

exports.restoreAccount = catchAsyncError(async (req, res, next) => {
  await userService.restoreAccount(req.params.id);

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
