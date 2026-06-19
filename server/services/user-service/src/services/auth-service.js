const axios = require('axios');

const AUTH_SERVICE = process.env.AUTH_SERVICE_URI;

// exports.validateToken = async token => {
//   const response = await axios.get(
//     `${AUTH_SERVICE}/api/v1/auth/internal/validate`,
//     {},
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   return response.data.data.user;
// };

exports.validateAuthUser = async id => {
  const res = await axios.get(`${AUTH_SERVICE}/api/v1/auth/internal/validate/${id}`);
  return res.data;
};
