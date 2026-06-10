const axios = require('axios');

const AUTH_SERVICE = process.env.AUTH_SERVICE_URI;

exports.suspendAuthUserCredential = async userId => {
  return axios.patch(`${AUTH_SERVICE}/api/v1/auth/internal/suspend/${userId}`);
};

exports.restoreCredential = async userId => {
  return axios.patch(`${AUTH_SERVICE}/api/v1/auth/internal/restore/${userId}`);
};

exports.validateAuthUser = async id => {
  return await axios.get(`${AUTH_SERVICE}/api/v1/auth/internal/validate/${id}`);
};
