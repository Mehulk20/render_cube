const assetRepo = require('../repository/asset-repo');

exports.getAllAssets = async () => {
  const assets = await assetRepo.getAssets();
  console.log(assets);
  return assets;
};

exports.createAsset = async data => {
  const newAsset = await assetRepo.createAsset(data);

  return newAsset;
};

exports.getAssetById = async id => {
  const asset = await assetRepo.getAssetById(id);

  return asset;
};

exports.updateAssetById = async (id, updates) => {
  const newAsset = await assetRepo.getAssetByIdAndUpdate(id, updates);

  return newAsset;
};

exports.updateAssetStatus = async (id, status) => {
  const asset = await assetRepo.updateAssetStatus(id, status);

  return asset;
};

exports.deleteAsset = async id => {
  await assetRepo.deleteAsset(id);

  return true;
};

//for development use

exports.importAllAssets = async data => {
  const asset = await assetRepo.createMany(data);

  return asset;
};

exports.deleteAllAssets = async () => {
  await assetRepo.deleteMany();

  return true;
};
