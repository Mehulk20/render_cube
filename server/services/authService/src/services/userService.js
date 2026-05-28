const axios = require('axios');

const USER_SERVICE = process.env.USER_SERVICE_URI;

exports.createUser = async data => {
  console.log(data);
  const res = await axios.post(`${USER_SERVICE}/createUser`, data);

  return res.data;
};
