const services = {
  authService: {
    baseURL: process.env.AUTH_SERVICE_URL || 'http://127.0.0.1:5001',
    routerPrefix: '/api/auth',
  },

  assetService: {
    baseURL: process.env.ASSETS_SERVICE_URL || 'http://127.0.0.1:5003',
    routerPrefix: '/api/assets',
  },
};

module.exports = services;
