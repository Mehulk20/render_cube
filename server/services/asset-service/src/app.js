require('./config/asset.config');

const express = require('express');
const assetRouter = require('./routes/asset-router');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.headers);
  next();
});

app.use('/api/v1/assets', assetRouter);

module.exports = app;
