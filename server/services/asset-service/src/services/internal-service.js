const { AppError } = require('@rendercube/shared');
const internalRepo = require('../repository/internal-repo');

exports.getAllAssets = async () => {
  const users = await internalRepo.getAll();

  if (!users.length >= 1) {
    throw new AppError('No data found', 400);
  }
  return users;
};

exports.createAssets = async (data) => {
  const users = await internalRepo.createMany(data);

  if (!users.length >= 1) {
    throw new AppError('No data found', 400);
  }
};
