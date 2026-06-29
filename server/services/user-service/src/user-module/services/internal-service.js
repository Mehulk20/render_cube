const { AppError } = require('@rendercube/shared');
const internalRepo = require('../repository/internal-repo');

exports.createUserProfile = async (payload) => {
  const user = await internalRepo.createUser(payload);
  return user;
};

exports.updateUserProfile = async (userId, payload) => {
  const user = await internalRepo.findByUserIdAndUpdate(userId, payload);

  if (!user) throw new AppError('request failed', 404);

  return true;
};

exports.deleteUserProfile = async (email) => {
  const user = await internalRepo.deleteUserByEmail(email);
  if (!user) throw new AppError('request failed', 404);

  return true;
};
