const Credentials = require('../models/auth-model');

exports.getCredentialByEmail = async email => {
  return await Credentials.findOne({ email }).select('+tokenVersion +active +passwordHash').lean();
};

exports.createCredential = async data => {
  return await Credentials.create(data);
};

exports.deleteCredentialByEmail = async email => {
  return await Credentials.findOneAndDelete({ email });
};

exports.getCredentialByUserId = async id => {
  return await Credentials.findOne({ userId: id }).select(
    '+active +tokenVersion +passwordChangedAt'
  );
};

exports.findOneByEmail = async email => {
  return await Credentials.findOne({ email });
};

exports.findOneAndUpdate = async (id, update) => {
  return await Credentials.findOneAndUpdate({ userId: id }, update, { new: true });
};

exports.findOneByResetToken = async hashedToken => {
  return await Credentials.findOne({ passwordResetToken: hashedToken }).select(
    '+passwordResetToken +passwordResetTimeout +tokenVersion'
  );
};

exports.findOneAndUpdateTokenVersion = async userId => {
  return await Credentials.findOneAndUpdate(
    { userId },
    { $inc: { tokenVersion: 1 } },
    { new: true }
  );
};
