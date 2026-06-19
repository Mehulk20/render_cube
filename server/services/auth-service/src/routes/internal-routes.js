const express = require('express');
const router = express.Router();

const internalController = require('../controllers/internal-controller');

router.post('/validate-token', internalController.validateToken);
