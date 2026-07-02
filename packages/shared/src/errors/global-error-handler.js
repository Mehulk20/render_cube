const { HTTP_STATUS } = require('../config');

const errorResponse = require('../responses/error-response');

module.exports = (err, req, res, next) => {
  const statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
  let message = err.message || 'Internal Server Error';

  let errors = err.errors || [];

  console.log(err);

  errorResponse({ res, statusCode, message, errors });
};
