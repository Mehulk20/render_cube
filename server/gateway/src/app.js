require('./config/env.config');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const setupProxy = require('./proxies/setupProxy');

const app = express();

app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(morgan('dev'));

app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Gateway healthy',
  });
});

setupProxy(app);

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  });
});

module.exports = app;
