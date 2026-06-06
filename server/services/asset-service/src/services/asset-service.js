const assetRepo = require('../repository/asset-repo');

exports.getAllAssets = async () => {
  const assets = await assetRepo.getAssets();

  return assets;
};

exports.createAsset = async data => {
  const newAsset = await assetRepo.createAsset(data);

  return newAsset;
};

exports.getAssetById = async id => {
  const asset = await assetRepo.getAssets(id);

  return assets;
};

exports.updateAssetById = async (id, updates) => {
  const newAsset = await assetRepo.getAssetByIdAndUpdate(id, updates);

  return newAsset;
};

exports.changeAssetState = async (id, state) => {
  const asset = await assetRepo.suspendAsset(id, state);

  return asset;
};

exports.deleteAsset = async id => {
  await assetRepo.deleteAsset(id);

  return true;
};
