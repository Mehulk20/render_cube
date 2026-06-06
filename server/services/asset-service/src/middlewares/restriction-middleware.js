const assetRepo = require('../repository/asset-repo');

const catchAsyncError = require('./catch-async-error');
const AppError = require('./app-error');

exports.restrictTo =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role)) return next(new AppError('Access denied', 403));

    next();
  };

exports.checkAssetOwnership = catchAsyncError(async (req, res, next) => {
  const asset = await assetRepo.getAssetById(req.params.id);

  if (!asset) return next(new AppError('Asset not found', 404));

  const isOwner = asset.creatorId.toString() === req.user.id;

  const isAdmin = req.user.role === 'admin';

  if (!isOwner && !isAdmin) return next(new AppError('unauthrized access', 403));

  req.asset = asset;

  next();
});
