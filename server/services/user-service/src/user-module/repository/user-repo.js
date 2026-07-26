const Profiles = require('../../models/user-model');
//get users or user
exports.getAllUsers = async () => {
  return Profiles.find();
};

exports.authUserProfile = async (id) => {
  return Profiles.findOne({ userId: id });
};

exports.findOneByIdentifier = async (identifier) => {
  return Profiles.findOne({
    $or: [{ email: identifier.toLowerCase() }, { userId: identifier.toLowerCase() }],
  });
};

//create new user

exports.createNewUser = async (data) => {
  return Profiles.create(data);
};

//delete user

exports.deleteAuthUser = async (id) => {
  return Profiles.findOneAndDelete({ userId: id });
};

exports.suspendUser = async (id) => {
  return Profiles.findOneAndUpdate(
    { userId: id },
    { status: 'suspended' },
    {
      new: true,

      runValidators: true,
    }
  );
};

//user updates

exports.findByUserIdAndUpdate = async (userId, updates) => {
  return Profiles.findOneAndUpdate({ userId }, updates, {
    new: true,
    runValidators: true,
  });
};

exports.updateAuthUser = async (id, updates) => {
  return Profiles.findOneAndUpdate(
    { userId: id },

    { $set: updates },

    {
      new: true,

      runValidators: true,
    }
  );
};
