const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const validator = require('validator');

const authSchema = new mongoose.Schema(
  {
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
    passwordHash: {
      type: String,
      required: true,
      minlength: 6,
      select: false, // exclude by default in queries
    },
    role: {
      type: String,
      enum: ['user', 'admin', 'owner'],
      default: 'user',
    },
    tokenVersion: {
      type: Number,
      default: 0,
    },
    passwordChangedAt: Date, //keeps a record of the current passowrd changed date and time.
    passwordResetToken: String,
    passwordResetTimeout: Date,
    //this state will mark the current user inactive but the user will still remain on the model or db
    active: {
      type: Boolean,
      default: true, //by default this will always be true. Once set to false and the user will be inactive.
      select: false,
    },
  },

  {
    timestamps: true,
  }
);

//validate confirm passowrd

authSchema.pre('save', function (next) {
  //we will use mongoose methods like isModified and isNew ----read mode on the documentation
  if (!this.isModified('passwordHash') || this.isNew) return next(); //it will check if the document is modifiefied and not a newly created document.

  //then update the field.
  this.passwordChangedAt = Date.now() - 1000;

  next();
});

// authSchema.pre(/^find/, function (next) {
//   this.find({ active: { $ne: false } }); //the query will return only data that has the active set to true.
//   next();
// });

module.exports = mongoose.model('Auth', authSchema);
