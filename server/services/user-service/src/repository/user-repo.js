const Profiles = require('../models/user-model');

exports.getAllUsers = async () => {
  return Profiles.find();
};

exports.authUserProfile = async id => {
  return Profiles.findById(id);
};

exports.createNewUser = async data => {
  return Profiles.create(data);
};

exports.updateAuthUser = async (id, updates) => {
  console.log(id, updates);
  return Profiles.findByIdAndUpdate(
    id,

    updates,

    {
      new: true,

      runValidators: true,
    }
  );
};

exports.deleteAuthUser = async id => {
  return Profiles.findByIdAndUpdate(
    id,
    { status: 'suspended' },
    {
      new: true,

      runValidators: true,
    }
  );
};

//admin repos
exports.restoreUser = async id => {
  return Profiles.findByIdAndUpdate(
    id,
    {
      status: 'active',
    },

    {
      new: true,
      runValidators: true,
    }
  );
};

exports.importDevData = async data => {
  return Profiles.insertMany(data);
};

exports.deleteDevData = async () => {
  return Profiles.deleteMany();
};
