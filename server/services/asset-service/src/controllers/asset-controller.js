const assetService = require('../services/asset-service');
const catchAsync = require('../middlewares/catch-async-error');
const AppError = require('../middlewares/app-error');

exports.getAssetes = catchAsync(async (req, res, next) => {
  const assets = await assetService.getAllAssets();
  console.log(assets.length);
  if (!assets.length) return next(new AppError('requested data not found', 400));

  res.status(200).json({
    status: 'success',
    data: assets,
  });
});

exports.getAssetById = catchAsync(async (req, res, next) => {
  const asset = await assetService.getAssetById(req.params.id);

  if (!asset) return next(new AppError('requested data not found', 400));

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

exports.updateAssetById = catchAsync(async (req, res, next) => {
  console.log(`this is my Id: ${req.user.id}`);
  const newAssets = await assetService.updateAssetById(req.params.id, req.body);

  if (!newAssets) return next(new AppError('requested data not found', 400));

  res.status(201).json({
    status: 'success',
    data: newAssets,
  });
});

exports.updateAssetStatus = catchAsync(async (req, res, next) => {
  const newAssets = await assetService.updateAssetStatus(req.params.id, req.body);

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
    message: 'Item deleted successfully',
  });
});

//for develoment use.
exports.importAssetData = catchAsync(async (req, res, next) => {
  const result = await assetService.createAsset({ ...req.body });

  if (!newAssets) return next(new AppError('requested data not found', 400));

  res.status(201).json({
    status: 'success',
    message: 'all assets imported',
  });
});

exports.deleteAssetData = catchAsync(async (req, res, next) => {
  const result = await assetService.deleteAllAssets();

  if (!result) return next(new AppError('process intrupted-please retry', 400));

  res.status(201).json({
    status: 'success',
    message: 'all assets removed',
  });
});
