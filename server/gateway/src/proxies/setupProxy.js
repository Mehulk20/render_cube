const { createProxyMiddleware } = require('http-proxy-middleware');
const services = require('../config/services.config');

module.exports = function setupProxy(app) {
  Object.values(services).forEach(({ baseURL, routerPrefix }) => {
    app.use(
      routerPrefix,
      createProxyMiddleware({
        target: baseURL,
        changeOrigin: true,
        pathRewrite: {
          [`^${routerPrefix}`]: '', // Rewrites `/api/auth/login` to `/login`
        }, //here as we defined routerPrefix as api/auth in the services. The pathRewrite will check for routerPrefix and removes it ex- api/auth/login  replaced with baseURl/login
      })
    );
  });
};
