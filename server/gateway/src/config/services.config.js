const services = {
  authService: {
    baseURL: process.env.AUTH_SERVICE_URL || 'http://auth-service:5001',
    routerPrefix: '/api/auth',
  },

  userService: {
    baseURL: process.env.USER_SERVICE_URL || 'http://user-service:5002',
    routerPrefix: '/api/users',
  },

  assetService: {
    baseURL: process.env.ASSET_SERVICE_URL || 'http://asset-service:5003',
    routerPrefix: '/api/assets',
  },
};

module.exports = services;
