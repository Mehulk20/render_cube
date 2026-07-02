require('./config/auth.config');

const express = require('express');
const morgan = require('morgan');

const { globalErrorHandler } = require('@rendercube/shared');

const authRouter = require('./routes/auth-router');
const internalRouter = require('./routes/internal-routes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (req, res) => {
  res.send('Auth service running');
});

app.use((req, res, next) => {
  console.log(req.headers);
  next();
});

app.use('/api/v1/auth', authRouter);

app.use((req, res, next) => {
  console.log('REQUEST:', req.method, req.originalUrl);
  next();
});

app.use('/api/v1/auth/internal', internalRouter);

app.use(globalErrorHandler);

module.exports = app;
