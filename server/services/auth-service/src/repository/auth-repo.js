const Credentials = require('../models/auth-model');

exports.findByIdentifier = async (identifier) => {
  return await Credentials.findOne({
    $or: [{ email: identifier.toLowerCase() }, { username: identifier.toLowerCase() }],
  })
    .select('+tokenVersion +active +passwordHash')
    .lean();
};

exports.getCredentialByEmail = async (email) => {
  return await Credentials.findOne({ email }).select('+active +tokenVersion, +passwordHash').lean();
};

exports.createCredential = async (data) => {
  return await Credentials.create(data);
};

exports.deleteCredentialByEmail = async (email) => {
  return await Credentials.findOneAndDelete({ email });
};

exports.getCredentialByUserId = async (userId) => {
  return await Credentials.findOne({ userId }).select(
    '+active +tokenVersion +passwordChangedAt, +passwordHash'
  );
};

exports.findOneByEmail = async (email) => {
  return await Credentials.findOne({ email });
};

exports.findOneAndUpdate = async (userId, payload) => {
  return await Credentials.findOneAndUpdate({ userId }, payload, {
    new: true,
    runValidators: true,
  });
};

exports.findOneAndUpdatePassword = async (userId, payload) => {
  return await Credentials.findOneAndUpdate(
    { userId },
    {
      $set: {
        passwordHash: payload,
        passwordChangedAt: new Date(),
        passwordResetToken: undefined,
        passwordResetTimeout: undefined,
      },
      $inc: {
        tokenVersion: 1,
      },
    },
    { new: true, runValidators: true }
  ).select('+tokenVersion');
};

exports.findOneByResetToken = async (hashedToken) => {
  return await Credentials.findOne({ passwordResetToken: hashedToken }).select(
    '+passwordResetToken +passwordResetTimeout +tokenVersion'
  );
};

exports.findOneAndUpdateTokenVersion = async (userId) => {
  return await Credentials.findOneAndUpdate(
    { userId },
    { $inc: { tokenVersion: 1 } },
    { new: true }
  );
};
