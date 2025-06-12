const mongoose = require('mongoose');
const slugify = require('slugify');

const assetSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'asset must have a title'],
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      maxlength: 1000,
    },
    fileUrl: {
      type: String,
      required: true,
    },
    previewImageUrl: {
      type: String,
    },
    category: {
      type: String,
      enum: ['3d-model', 'video-template', 'vector', 'logo'],
      required: true,
    },
    tags: [String],
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
    likes: {
      type: Number,
      default: 0,
    },
    downloads: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

assetSchema.pre('save', function (next) {
  if (this.isModified('title')) return next();

  this.slug = slugify(this.title, { lower: true, strict: true });

  next();
});

module.exports = mongoose.model('Assets', assetSchema);
