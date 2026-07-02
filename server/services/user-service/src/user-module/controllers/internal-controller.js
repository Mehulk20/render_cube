const { AppError, catchAsyncError } = require('@rendercube/shared');

const internalService = require('../services/internal-service');
const helper = require('../../utils/helper');

exports.createUserProfile = catchAsyncError(async (req, res, next) => {
  const result = await internalService.createUserProfile(req.body);

  if (!result) return next(new AppError('unable to create new user, re-try', 400));

  res.status(200).json({
    status: 'success',
    result,
  });
});

exports.updateUserProfile = catchAsyncError(async (req, res) => {
  const payload = helper.filterAllowedFields(req.body);

  await internalService.updateUserProfile(req.params.userId, payload);

  res.status(200).json({
    status: 'success',
    message: 'user profile updated',
  });
});

exports.deleteUserProfile = catchAsyncError(async (req, res) => {
  await internalService.deleteUserProfile(req.params.email);

  res.status(200).json({
    status: 'success',
    message: 'account deleted successfully.',
  });
});
