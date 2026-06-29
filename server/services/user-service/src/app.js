require('./config/user.config');

const express = require('express');
const morgan = require('morgan');
const userRouter = require('./user-module/routes/user-router');
const internalRouter = require('./user-module/routes/internal-router');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (req, res) => {
  res.send('User service running');
});

app.use((req, res, next) => {
  console.log(req.headers);
  next();
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/internal/users', internalRouter);

module.exports = app;
