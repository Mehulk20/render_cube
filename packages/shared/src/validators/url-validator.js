const { z } = require('zod');
const validator = require('validator');

const validateUrl = z
  .string()
  .trim()
  .refine(
    (value) =>
      validator.isURL(value, {
        protocols: ['http', 'https'],
        require_protocol: true,
      }),
    {
      message: 'Please provide a valid http:// or https:// URL.',
    }
  );
module.exports = {
  validateUrl,
};
