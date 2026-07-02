module.exports = ({ res, statusCode = 500, message = 'Something went wrong', errors = [] }) => {
  const response = {
    success: false,
    message,
    timestamp: new Date().toISOString()
  };

  if (errors.length > 0) {
    response.errors = errors;
  }

  return res.status(statusCode).json(response);
};
