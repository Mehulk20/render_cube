const { z } = require('zod');
const {
  validateStoreName,
  validateStoreUrl,
  validateStoreDescription,
  validateStoreCategory,
} = require('@rendercube/shared');

const updateCreatorValidator = z.object({
  storeName: validateStoreName.optional(),
  storeUrl: validateStoreUrl.optional(),
  storeDescription: validateStoreDescription.optional(),
  storeCategory: validateStoreCategory.optional(),
});

module.exports = {
  updateCreatorValidator,
};
