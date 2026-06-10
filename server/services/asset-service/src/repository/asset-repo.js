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

exports.getAssetById = async id => {
  return Inventory.findOne({
    _id: id,
    status: { $eq: 'published' },
    visibility: { $eq: 'public' },
  });
};

exports.createAsset = async data => {
  return Inventory.create(data);
};

exports.getAssetByIdAndUpdate = async (id, updates) => {
  return Inventory.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
};

exports.getAssetByIdAndUpdate = async (id, updates) => {
  return Inventory.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
};

exports.updateAssetStatus = async (id, status) => {
  return Inventory.findByIdAndUpdate(id, status, { new: true, runValidators: true });
};

exports.deleteAsset = async id => {
  return Inventory.findByIdAndDelete(id);
};

//for development use
exports.createMany = async data => {
  return Inventory.create(data);
};

exports.deleteMany = async id => {
  return Inventory.deleteMany();
};
