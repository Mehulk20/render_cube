const userRepo = require('../repository/userRepo');
const authService = require('./authService');

const AppError = require('../middleware/appError');

exports.getUsers = async () => {
  const users = await userRepo.getAllUsers();

  return users;
};

exports.getUserById = async userId => {
  const user = await userRepo.authUserProfile(userId);

  return user;
};

exports.createUser = async data => {
  const user = await userRepo.createNewUser(data);

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
