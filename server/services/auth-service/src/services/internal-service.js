const { AppError } = require('@rendercube/shared');

const internalRepo = require('../repository/internal-repo');

const passwordManager = require('../utils/password-manager');

exports.getAllCredentials = async () => {
  const users = await internalRepo.getAll();

  if (!users.length >= 1) {
    throw new AppError('No data found', 400);
  }
  return users;
};

exports.getExistingAuths = async (emails) => {
  const existing = await internalRepo.getAllByEmail(emails);

  return existing;
};

exports.createDevCredential = async (data) => {
  const authData = await Promise.all(
    data.map(async ({ password, ...rest }) => ({
      ...rest,
      passwordHash: await passwordManager.hashPassword(password)
    }))
  );

  const users = await internalRepo.createMany(authData);

  return users;
};

exports.deleteAllCredentials = async () => {
  const users = await internalRepo.deleteMany();

  if (!users) throw new AppError('Something went wrong. re-try', 400);

  return true;
};

exports.deleteCredentialsByUserIds = async (userIds) => {
  if (!Array.isArray(userIds) || userIds.length === 0) {
    return {
      acknowledged: true,
      deletedCount: 0
    };
  }
  const users = await internalRepo.deleteManyByUserIds(userIds);

  return users;
};
