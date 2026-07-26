const sanitizeHtml = require('sanitize-html');

const sanitizePlainText = (value) => {
  if (typeof value !== 'string') return value;

  return sanitizeHtml(value, {
    allowedTags: [],
    allowedAttributes: {},
  })
    .trim()
    .replace(/\s+/g, ' ');
};

const sanitizeLongText = (value) => {
  if (typeof value !== 'string') return value;

  return sanitizeHtml(value, {
    allowedTags: [],
    allowedAttributes: {},
  }).trim();
};

module.exports = {
  sanitizePlainText,
  sanitizeLongText,
};
