const express = require('express');
const router = express.Router();

const internalController = require('../controllers/internal-controller');

router.route('/profile').post(internalController.createUserProfile);
router.route('/:email').delete(internalController.deleteUserProfile);
router.route('/:userId').patch(internalController.updateUserProfile);

module.exports = router;
