const Assets = require('../models/assetModel');

exports.getAssets = async => {
  return Assets.find();
};

exports.getAssetById = async id => {
  return Assets.findById(id);
};

exports.createAsset = async data => {
  return Assets.create(data);
};

exports.getAssetByIdAndUpdate = async (id, updates) => {
  return Assets.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
};

exports.getAssetByIdAndUpdate = async (id, updates) => {
  return Assets.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
};

exports.suspendAsset = async id => {
  return Assets.findByIdAndUpdate(id, { status: 'suspended' }, { new: true, runValidators: true });
};

exports.recoverAsset = async (id, state) => {
  return Assets.findByIdAndUpdate(id, state, { new: true, runValidators: true });
};

exports.deleteAsset = async id => {
  return Assets.findByIdAndDelete(id);
};
