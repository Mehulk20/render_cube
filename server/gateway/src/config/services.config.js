const services = {
  auth: {
    target: process.env.AUTH_SERVICE_URL || 'http://auth-service:5001',
    prefix: '/api/v1/auth',
  },

  user: {
    target: process.env.USER_SERVICE_URL || 'http://user-service:5002',
    prefix: '/api/v1/users',
  },

  asset: {
    target: process.env.ASSET_SERVICE_URL || 'http://asset-service:5003',
    prefix: '/api/v1/assets',
  },
};

module.exports = services;
