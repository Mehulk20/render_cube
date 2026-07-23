const Profiles = require('../../models/user-model');

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

exports.createNewUser = async (data) => {
  return Profiles.create(data);
};

exports.updateAuthUser = async (id, updates) => {
  return Profiles.findOneAndUpdate(
    { userId: id },

    updates,

    {
      new: true,

      runValidators: true,
    }
  );
};

exports.findByUserIdAndUpdate = async (userId, updates) => {
  return Profiles.findOneAndUpdate({ userId }, updates, {
    new: true,
    runValidators: true,
  });
};

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
