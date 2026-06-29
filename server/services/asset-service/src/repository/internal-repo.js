const Assets = require('../models/asset-model');

exports.getAll = async () => {
  return Assets.find();
};

exports.createMany = async (data) => {
  return Assets.create(data);
};

exports.deleteMany = async () => {
  return Assets.deleteMany();
};
