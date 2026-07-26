const { z } = require('zod');
const { sanitizePlainText } = require('../utils');

const validateName = z
  .string()
  .trim()
  .min(2)
  .max(50)
  .regex(/^[\p{L}\p{M}0-9 .'-]+$/u)
  .transform(sanitizePlainText);

module.exports = {
  validateName,
};
