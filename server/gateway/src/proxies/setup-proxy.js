const { createProxyMiddleware } = require('http-proxy-middleware');
const services = require('../config/services.config');

module.exports = function setupProxy(app) {
  Object.values(services).forEach(({ target, prefix }) => {
    app.use(
      prefix,
      createProxyMiddleware({
        target: target,
        changeOrigin: true,
        xfwd: true,
        proxyTimeout: 10000,
        logLevel: 'warn'
      })
    );
  });
};
