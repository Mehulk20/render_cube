const { createProxyMiddleware } = require('http-proxy-middleware');
const services = require('../config/services.config');

module.exports = function setupProxy(app) {
  Object.values(services).forEach(({ baseURL, routePrefix }) => {
    app.use(
      routePrefix,
      createProxyMiddleware({
        target: baseURL,
        changeOrigin: true,
        pathRewrite: {
          [`^${routePrefix}`]: '', // Rewrites `/api/auth/login` to `/login`
        },
      })
    );
  });
};
