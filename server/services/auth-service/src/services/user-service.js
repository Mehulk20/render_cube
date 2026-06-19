const axios = require('axios');

const USER_SERVICE = process.env.USER_SERVICE_URI;

exports.createAuthUser = async payload => {
  return axios.post(`${USER_SERVICE}/api/v1/users/internal/userService`, payload);
};

exports.deleteAuthUser = async email => {
  return axios.delete(`${USER_SERVICE}/api/v1/users/internal/deleteUser`, { data: { email } });
};
