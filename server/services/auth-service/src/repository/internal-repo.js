const Auth = require('../models/auth-model');

exports.getAllByEmail = async (emails) => {
  return Auth.find({ email: { $in: emails } });
};

exports.createMany = async (data) => {
  return Auth.insertMany(data);
};

exports.deleteMany = async () => {
  return Auth.deleteMany();
};

exports.findByEmail = async (email) => {
  return Auth.findOne({ email });
};

exports.deleteManyByUserIds = async (userIds) => {
  return await Auth.deleteMany({
    userId: { $in: userIds }
  });
};
