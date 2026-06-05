const mongoose = require('mongoose');
const slugify = require('slugify');

const assetSchema = new mongoose.Schema(
  {
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: [true, 'asset must have a title'],
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
      fileSize: Number,
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
    likes: {
      type: Number,
      default: 0,
    },
    downloads: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'pending-review', 'suspended', 'rejected'],
      default: 'draft',
    },

    visibility: {
      type: String,
      enum: ['public', 'private'],
      default: 'public',
    },
    version: {
      type: String,
      default: '1.0.0',
    },
  },
  {
    timestamps: true,
  }
);

//indexes

assetSchema.index({
  title: 'text',
  description: 'text',
  tags: 'text',
});

assetSchema.index({ creatorId: 1 });

assetSchema.index({ category: 1 });

assetSchema.index({ status: 1 });

assetSchema.index({ slug: 1 }, { unique: true });

assetSchema.pre('save', function (next) {
  if (this.isModified('title')) return next();

  this.slug = slugify(this.title, { lower: true, strict: true });

  next();
});

module.exports = mongoose.model('Assets', assetSchema);
