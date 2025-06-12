const Assets = require('./../models/assetModel');
const catchAsync = require('./../middlewares/catchAsyncError');
const AppError = require('./../middlewares/appError');

exports.getAssetes = catchAsync(async (req, res, next) => {
  const assets = await Assets.find();
  if (!assets) return next(new AppError('requested data not found', 400));

  res.status(200).json({
    status: 'success',
    data: assets,
  });
});

exports.createAssetes = catchAsync(async (req, res, next) => {
  const newAssets = await Assets.create(req.body);
  if (!newAssets) return next(new AppError('requested data not found', 400));

  res.status(201).json({
    status: 'success',
    data: newAssets,
  });
});
