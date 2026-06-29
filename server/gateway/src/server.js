const app = require('./app');

const PORT = process.env.PORT || 5050;

const server = app.listen(PORT, () => console.log(`API gateway running on port ${PORT}`));

process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down...');
  server.close(() => {
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received. Shutting down...');
  server.close(() => {
    process.exit(0);
  });
});
