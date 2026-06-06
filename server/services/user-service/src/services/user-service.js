const userRepo = require('../repository/user-repo');
const authService = require('./auth-service');

const AppError = require('../middleware/app-error');

exports.getUsers = async () => {
  const users = await userRepo.getAllUsers();

  return users;
};

exports.createUser = async data => {
  const user = await userRepo.createNewUser(data);

  return user;
};

exports.getUserById = async userId => {
  const user = await userRepo.authUserProfile(userId);

  return user;
};

exports.updateUserProfile = async (userId, data) => {
  console.log(userId, data);
  const user = await userRepo.updateAuthUser(userId, data);

  return user;
};

exports.deleteAccount = async userId => {
  // suspend profile
  await userRepo.deleteAuthUser(userId);

  // suspend auth credential
  await authService.suspendAuthUserCredential(userId);

  return true;
};

//admin services

exports.restoreAccount = async userId => {
  //restore profile
  await userRepo.restoreUser(userId);

  //restore credential

  await authService.restoreCredential(userId);

  return true;
};

//development use only

exports.importAllData = async data => {
  const user = await userRepo.importDevData(data);
  return user;
};

exports.deleteAllData = async () => {
  await userRepo.deleteDevData();
  return true;
};
