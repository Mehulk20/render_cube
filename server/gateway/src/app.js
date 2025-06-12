require('./config/env.config');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const setupProxy = require('./proxy/setupProxy');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

setupProxy(app);

module.exports = app;
