const Profiles = require('../../models/user-model');

exports.createUser = async (payload) => {
  return Profiles.create(payload);
};

exports.findByUserIdAndUpdate = async (userId, payload) => {
  return Profiles.findOneAndUpdate({ userId }, payload, {
    new: true,
    runValidators: true
  });
};

exports.deleteUserByEmail = async (email) => {
  return Profiles.deleteOne({ email });
};
