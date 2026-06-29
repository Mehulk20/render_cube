const express = require('express');
const router = express.Router();

const globalAuthentication = require('../middleware/global-authentication');
const internalController = require('../controllers/internal-controller');

router.post('/validate-token', globalAuthentication.validateToken);

//development use only
router
  .route('/development/credentials')
  .get(internalController.getAllCredentials)
  .post(internalController.createDevCredentials)
  .delete(internalController.deleteAllCredentials);

router.route('/development/credentials/userIds', internalController.deleteCredentialsByUserIds);

router.route('/development/existing').post(internalController.getAllExisting);

module.exports = router;
