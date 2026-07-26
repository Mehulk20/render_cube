const { z } = require('zod');
const {
  validateBio,
  validateName,
  validateCompany,
  validateLocation,
} = require('@rendercube/shared');

const updateAboutValidator = z.object({
  name: validateName.optional(),
  bio: validateBio.optional(),
  company: validateCompany.optional(),
  location: validateLocation.optional(),
});

module.exports = {
  updateAboutValidator,
};
