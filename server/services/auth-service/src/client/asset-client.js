const client = require('./base-client');

const ASSET_SERVICE_URL = process.env.ASSET_SERVICE_URL;
const INTERNAL_URI = '/api/v1/assets/internal/development';

exports.getInventory = async () => {
  // console.log(`${ASSET_SERVICE_URL}${INTERNAL_URI}/inventory`);
  const response = await client.get(`${ASSET_SERVICE_URL}${INTERNAL_URI}/inventory`);
  return response.data;
};

exports.createInventory = async (data) => {
  const response = await client.post(`${ASSET_SERVICE_URL}${INTERNAL_URI}/inventory`, data);

  return response.data;
};
