const { z } = require('zod');
const { sanitizePlainText } = require('../utils');

const validateStoreName = z.string().trim().min(2).max(80).transform(sanitizePlainText);

const validateStoreUrl = z
  .string()
  .trim()
  .toLowerCase()
  .regex(/^[a-z0-9-]+$/, {
    message: 'Store URL can only contain lowercase letters, numbers and hyphens.',
  })
  .min(3)
  .max(50);

const validateStoreDescription = z.string().trim().max(500).transform(sanitizePlainText);

const validateStoreCategory = z.string().trim().max(50).transform(sanitizePlainText);

module.exports = {
  validateStoreName,
  validateStoreUrl,
  validateStoreDescription,
  validateStoreCategory,
};
