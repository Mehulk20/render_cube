const Inventory = require('../models/asset-model');

exports.getAssets = async => {
  return Inventory.aggregate([
    {
      $match: {
        status: { $eq: 'published' },
        visibility: { $eq: 'public' },
      },
    },
  ]);
};

exports.findAssetByAssetId = async id => {
  return Inventory.findOne({ assetId: id });
};

exports.getAssetById = async id => {
  return Inventory.findOne({
    assetId: id,
    status: { $eq: 'published' },
    visibility: { $eq: 'public' },
  });
};

exports.createAsset = async data => {
  return Inventory.create(data);
};

exports.getAssetByIdAndUpdate = async (id, updates) => {
  return Inventory.findOneAndUpdate({ assetId: id }, updates, { new: true, runValidators: true });
};

exports.fineOneAndUpdateStatus = async (id, status) => {
  return Inventory.findOneAndUpdate({ assetId: id }, status, { new: true, runValidators: true });
};

exports.findByAssetIdAndDelete = async id => {
  return Inventory.findOneAndDelete({ assetId: id });
};

//for development use
exports.createMany = async data => {
  return Inventory.create(data);
};

exports.deleteMany = async id => {
  return Inventory.deleteMany();
};
