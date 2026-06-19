const mongoose = require('mongoose');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

const authSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },

    passwordHash: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 8,
      select: false,
    },

    role: {
      type: String,
      enum: ['user', 'creator', 'admin'],
      default: 'user',
    },

    active: {
      type: Boolean,
      default: true,
    },

    tokenVersion: {
      type: Number,
      default: 0,
      select: false,
    },

    passwordChangedAt: {
      type: Date,
      select: false,
    },

    passwordResetToken: {
      type: String,
      select: false,
    },

    passwordResetTimeout: {
      type: Date,
      select: false,
    },

    failedLoginAttempts: {
      type: Number,
      default: 0,
      select: false,
    },

    lockUntil: {
      type: Date,
      select: false,
    },

    emailVerified: {
      type: Boolean,
      default: false,
    },

    emailVerificationToken: {
      type: String,
      select: false,
    },

    emailVerificationExpires: {
      type: Date,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Auth', authSchema);
