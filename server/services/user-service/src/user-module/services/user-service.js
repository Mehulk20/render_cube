const { AppError, HTTP_STATUS } = require('@rendercube/shared');
const userRepo = require('../repository/user-repo');
const storageService = require('./storage-service');

exports.getUsers = async () => {
  const users = await userRepo.getAllUsers();

  return users;
};

exports.createUser = async (data) => {
  const user = await userRepo.createNewUser(data);

  return user;
};

exports.getUserById = async (userId) => {
  const user = await userRepo.authUserProfile(userId);

  const avatarUrl = storageService.avatarUrl(user.avatar);

  return { ...user.toObject(), avatarUrl };
};

exports.updateUserProfile = async (userId, data) => {
  const user = await userRepo.updateAuthUser(userId, data);

  return user;
};

exports.deleteAccount = async (userId) => {
  // suspend profile
  await userRepo.deleteAuthUser(userId);

  // suspend auth credential
  // await authService.suspendAuthUserCredential(userId);

  return true;
};

//admin services

exports.suspendUser = async (userId) => {
  // suspend profile
  await userRepo.deleteAuthUser(userId);

  // suspend auth credential
  // await authService.suspendAuthUserCredential(userId);

  return true;
};

exports.restoreAccount = async (userId) => {
  //restore profile
  await userRepo.restoreUser(userId);

  //restore credential

  // await authService.restoreCredential(userId);

  return true;
};

//development use only

exports.importAllData = async (data) => {
  const user = await userRepo.importDevData(data);
  return user;
};

exports.deleteAllData = async () => {
  await userRepo.deleteDevData();
  return true;
};

exports.updateAvatar = async (userId, file) => {
  const user = await userRepo.findOneByIdentifier(userId);

  if (!user) {
    throw new AppError('User not found', HTTP_STATUS.NOT_FOUND);
  }

  const oldAvatar = user.avatar;

  user.avatar = await storageService.saveAvatar(file);

  const avatarUrl = storageService.avatarUrl(user.avatar);

  await user.save();

  if (oldAvatar && oldAvatar !== user.avatar) {
    await storageService.deleteAvatar(oldAvatar);
  }

  return { ...user.toObject(), avatarUrl };
};

exports.updateBanner = async (userId, file) => {
  const user = await userRepo.findOneByIdentifier(userId);

  if (!user) {
    throw new AppError('User not found', HTTP_STATUS.NOT_FOUND);
  }

  const oldABanner = user.banner;

  user.banner = await storageService.saveBanner(file);

  const bannerUrl = storageService.bannerUrl(user.banner);

  await user.save();

  if (oldABanner && oldABanner !== user.banner) {
    await storageService.deleteBanner(oldABanner);
  }

  return { ...user.toObject(), bannerUrl };
};
