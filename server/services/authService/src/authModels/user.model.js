const mongoose = require('mongoose');

const authSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false, // exclude by default in queries
    },
    confirmPassword: {
      type: String,
      required: true,
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: 'confimr password must be same as passowrd',
      },
    },

    passwordChangedAt: Date, //keeps a record of the current passowrd changed date and time.
    passwordRestToken: String,
    passwordRestTimeOut: Date,
    //this state will mark the current user inactive but the user will still remain on the model or db
    active: {
      type: String,
      default: true, //by default this will always be true. Once set to false and the user will be inactive.
      select: false,
    },
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Auth', authSchema);
