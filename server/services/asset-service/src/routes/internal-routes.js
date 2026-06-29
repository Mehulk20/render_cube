const express = require('express');
const router = express.Router();

const internalController = require('../controllers/internal-controller');

//development use only
router.route('/development/inventory').get(internalController.getAllUserAssets);

module.exports = router;
