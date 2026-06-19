require('./config/auth.config');

const express = require('express');
const morgan = require('morgan');
const authRouter = require('./routes/auth-router');

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

module.exports = app;
