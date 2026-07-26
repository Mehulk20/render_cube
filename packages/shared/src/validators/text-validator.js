const { z } = require('zod');
const { sanitizePlainText } = require('../utils');

const validateBio = z.string().trim().min(15).max(500).transform(sanitizePlainText);

const validateLocation = z.string().trim().max(80).transform(sanitizePlainText);

const validateCompany = z.string().trim().max(80).transform(sanitizePlainText);

module.exports = {
  validateBio,
  validateLocation,
  validateCompany,
};
