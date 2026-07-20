module.exports = ({ res, statusCode = 500, message = 'Something went wrong', errors = {} }) => {
  const response = {
    success: false,
    message,
    timestamp: new Date().toISOString(),
  };

  if (Object.keys(errors).length) {
    response.errors = errors;
  }

  return res.status(statusCode).json(response);
};
