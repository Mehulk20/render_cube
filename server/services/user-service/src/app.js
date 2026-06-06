require('./config/user.config');

const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/user-router');

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

app.use('/', userRouter);

module.exports = app;
