const { catchAsyncError } = require('@rendercube/shared');
const internalService = require('../services/internal-service');

exports.getAllUserAssets = catchAsyncError(async (req, res, next) => {
  const result = await internalService.getAllAssets();

  res.status(200).json({
    status: 'success',
    result
  });
});
