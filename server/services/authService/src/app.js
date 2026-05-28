require('./config/auth.config');

const express = require('express');

const morgan = require('morgan');

const authRouter = require('./routes/authRouter');

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.use('/', authRouter);

app.use((req, res, next) => {
  console.log(req.headers);
  next();
});

module.exports = app;
