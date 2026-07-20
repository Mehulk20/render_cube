const client = require('./base-client');

const USER_SERVICE_URI = process.env.USER_SERVICE_URI;

const INTERNAL_URI = '/api/v1/internal/users';

exports.createUserProfile = async (payload) => {
  console.log(`from auth Service: ${payload}`);
  const response = await client.post(`${USER_SERVICE_URI}${INTERNAL_URI}/profile`, payload);

  return response.data;
};

exports.updateUserProfile = async (userId, payload) => {
  const response = await client.patch(
    `${USER_SERVICE_URI}${INTERNAL_URI}/${encodeURIComponent(userId)}`,
    payload
  );

  return response.data;
};

exports.deleteUserProfile = async (email) => {
  const response = await client.delete(
    `${USER_SERVICE_URI}${INTERNAL_URI}/${encodeURIComponent(email)}`
  );

  return response.data;
};
