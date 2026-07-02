require('./config/asset.config');

const express = require('express');

const { globalErrorHandler } = require('@rendercube/shared');

const assetRouter = require('./routes/asset-router');
const internalRouter = require('./routes/internal-routes');

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.send('User service running');
});

app.use((req, res, next) => {
  console.log(req.headers);
  next();
});

app.use('/api/v1/assets', assetRouter);
app.use('/api/v1/assets/internal', internalRouter);

app.use(globalErrorHandler);

module.exports = app;
