const express = require('express');
const router = express.Router();

const { protect, restrictTo } = require('@rendercube/shared');
const userController = require('../controllers/user-controller');

router.get('/', userController.getUsers);

// authenticated user
router.get('/me', protect, userController.getMe);

router.patch('/me', protect, userController.updateMe);

router.patch('/suspendMe', protect, userController.suspendMe);

router.delete('/me', protect, userController.deleteMe);

module.exports = router;
