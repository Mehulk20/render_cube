const axios = require('axios');

const AUTH_SERVICE = process.env.AUTH_SERVICE_URI;

exports.suspendAuthUserCredential = async userId => {
  console.log(AUTH_SERVICE);
  return axios.patch(`${AUTH_SERVICE}/suspend/${userId}`);
};

exports.restoreCredential = async userId => {
  console.log(AUTH_SERVICE);
  return axios.patch(`${AUTH_SERVICE}/restore/${userId}`);
};
