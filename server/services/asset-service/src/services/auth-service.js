const axios = require('axios');

const AUTH_SERVICE_DB = process.env.AUTH_SERVICE_URI;

exports.validateAuthUser = async id => {
  const res = await axios.get(`${AUTH_SERVICE_DB}/api/v1/auth/internal/validate/${id}`);
  return res.data;
};
