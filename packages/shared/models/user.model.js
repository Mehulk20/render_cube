const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
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
    avatar: {
      type: String, // URL to profile image
    },
    bio: {
      type: String,
      maxlength: 500,
    },
    location: {
      type: String,
    },
    socialLinks: {
      website: String,
      twitter: String,
      instagram: String,
      github: String,
    },
    role: {
      type: String,
      enum: ['user', 'creator', 'admin'],
      default: 'user',
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    createdAssets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assets',
      },
    ],
    likedAssets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assets',
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('User', userSchema);
