const express = require('express');
const router = express.Router(); //development use only

const devController = require('./dev-controller');
//auth-client
router.route('/auths').get(devController.getUserCredentials);

//user-client
router.route('/users').get(devController.getUserProfiles);

//asset-client
router.route('/assets').get(devController.getAllUserAssets);

router.route('/data').post(devController.insertDevData);

module.exports = router;
