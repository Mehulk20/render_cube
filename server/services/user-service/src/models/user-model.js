const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      trim: true,
      lowercase: true,
      minlength: [3, 'Username must be at least 3 characters'],
      maxlength: [30, 'Username cannot exceed 30 characters'],
      match: [
        /^[a-z0-9_]+$/,
        'Username can only contain lowercase letters, numbers, and underscores',
      ],
    },

    avatar: {
      type: String,
      default: null,
    },

    banner: {
      type: String,
      default: null,
    },

    bio: {
      type: String,
      maxlength: 280,
      default: '',
    },

    storeName: {
      type: String,
      trim: true,
      maxlength: 80,
    },

    storeUrl: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      maxlength: 50,
    },

    storeDescription: {
      type: String,
      trim: true,
      maxlength: 500,
    },

    storeCategory: {
      type: String,
      trim: true,
      maxlength: 50,
    },

    socials: {
      type: [
        {
          platform: {
            type: String,
            enum: ['website', 'instagram', 'linkedin', 'twitter'],
            required: true,
          },
          url: {
            type: String,
            trim: true,
            required: true,
          },
        },
      ],
      default: [],
    },
    status: {
      type: String,
      enum: ['active', 'suspended'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
