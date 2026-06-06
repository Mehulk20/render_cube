const axios = require('axios');

exports.validateAuthUser = async id => {
  return await axios.get(`${AUTH_SERVICE}/validate/${id}`);
};
