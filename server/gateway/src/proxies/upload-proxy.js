const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = createProxyMiddleware({
  target: process.env.USER_SERVICE_URL,
  changeOrigin: true,
  logLevel: 'debug',
});
