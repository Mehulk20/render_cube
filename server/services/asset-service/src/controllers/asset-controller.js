const assetService = require('../services/asset-service');
const catchAsync = require('../middlewares/catch-async-error');
const AppError = require('../middlewares/app-error');

exports.getAssetes = catchAsync(async (req, res, next) => {
  const assets = await assetService.getAllAssets();

  if (!assets) return next(new AppError('requested data not found', 400));

  res.status(200).json({
    status: 'success',
    data: assets,
  });
});

exports.getAsset = catchAsync(async (req, res, next) => {
  const asset = await assetService.getAssetById(req.params.id);

  if (!assets) return next(new AppError('requested data not found', 400));

  res.status(200).json({
    status: 'success',
    data: asset,
  });
});

exports.createAssete = catchAsync(async (req, res, next) => {
  const newAssets = await assetService.createAsset({ ...req.body, creatorId: req.user.id });

  if (!newAssets) return next(new AppError('requested data not found', 400));

  res.status(201).json({
    status: 'success',
    data: newAssets,
  });
});

exports.updateAsset = catchAsync(async (req, res, next) => {
  const newAssets = await assetService.updateAssetById(req.params.id, req.body);

  if (!newAssets) return next(new AppError('requested data not found', 400));

  res.status(201).json({
    status: 'success',
    data: newAssets,
  });
});

exports.updateAssetState = catchAsync(async (req, res, next) => {
  const newAssets = await assetService.changeAssetState(req.params.id, req.body);

  if (!newAssets) return next(new AppError('requested data not found', 400));

  res.status(201).json({
    status: 'success',
    data: newAssets,
  });
});

exports.deleteAssete = catchAsync(async (req, res, next) => {
  const result = await assetService.deleteAsset(req.params.id);

  if (!result) return next(new AppError('delete operation failed', 400));

  res.status(201).json({
    status: 'success',
  });
});
