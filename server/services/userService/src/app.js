require('./config/user.config');

const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/userRouter');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (req, res) => {
  res.send('User service running');
});

app.use('/', userRouter);

app.use((req, res, next) => {
  console.log(req.headers);
  next();
});

module.exports = app;
