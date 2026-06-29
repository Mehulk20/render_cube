const axios = require('axios');

const baseClient = axios.create({
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json'
  }
});

module.exports = baseClient;
