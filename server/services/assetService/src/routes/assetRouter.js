const express = require('express');
const router = express.Router();

const assetController = require('./../controllers/assetController');

router.get('/', assetController.getAssetes).post('/', assetController.createAssetes);

module.exports = router;
