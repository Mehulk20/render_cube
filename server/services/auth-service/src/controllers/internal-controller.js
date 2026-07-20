const { catchAsyncError, AppError } = require('@rendercube/shared');
const internalService = require('../services/internal-service');

exports.getAllCredentials = catchAsyncError(async (req, res) => {
  const result = await internalService.getAllCredentials();

  res.status(200).json({
    status: 'success',
    result,
  });
});

//development use only
exports.getAllExisting = catchAsyncError(async (req, res) => {
  const result = await internalService.getExistingAuths(req.body);

  res.status(200).json({
    status: 'success',
    result,
  });
});

exports.createDevCredentials = catchAsyncError(async (req, res, next) => {
  const result = await internalService.createDevCredential(req.body);

  if (!result.length) return next(new AppError('Something went wrong, please re-try', 400));

  res.status(200).json({
    status: 'success',
    result,
  });
});

exports.deleteAllCredentials = async (req, res) => {
  await internalService.deleteAllCredentials();

  res.status(200).json({
    status: 'success',
    message: 'all credentials removed',
  });
};

exports.deleteCredentialsByUserIds = catchAsyncError(async (req, res, next) => {
  const { userIds } = req.body;

  const result = await internalService.deleteCredentialsByUserIds(userIds);

  if (!result) return next(new AppError('Something went wrong. re-try', 400));

  res.status(200).json({
    status: 'success',
    deletedCount: result.deletedCount,
  });
});
