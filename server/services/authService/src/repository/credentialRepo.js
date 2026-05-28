const Credentials = require('../models/authModel');

exports.findExistingUser = async email => {
  return Credentials.findOne({ email });
};

exports.createCredentials = async data => {
  return Credentials.create(data);
};

exports.findUserForLogin = async email => {
  return Credentials.findOne({ email }).select('+passwordHash +passwordChangedAt +active');
};

exports.findUserForForgotPassword = async email => {
  return Credentials.findOne({ email }).select(
    '+passwordChangedAt +passwordResetToken +passwordResetTimeout +active'
  );
};

exports.findUserForPasswordReset = async ({ passwordResetToken }) => {
  return Credentials.findOne({
    passwordResetToken,
    passwordResetTimeout: { $gt: Date.now() },
  }).select('+active');
};

exports.findAuthUserById = async id => {
  return Credentials.findById(id).select('+active');
};

exports.findUserForLogout = async id => {
  return Credentials.findById(id).select('+active');
};

exports.suspendAuthUser = async id => {
  return Credentials.findByIdAndUpdate(
    id,

    {
      active: false,

      $inc: {
        tokenVersion: 1,
      },
    },

    {
      new: true,
    }
  );
};

//admin

exports.restoreAuthUser = async id => {
  return Credentials.findByIdAndUpdate(id, { active: true }, { new: true });
};
