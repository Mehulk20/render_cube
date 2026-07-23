const express = require('express');
const router = express.Router();

const upload = require('../../config/multer.config');
const { protect, restrictTo } = require('@rendercube/shared');
const userController = require('../controllers/user-controller');

router.get('/', userController.getUsers);

// authenticated user
router.get('/me', protect, userController.getMe);

router.patch('/me', protect, userController.updateMe);

router.patch('/suspendMe', protect, userController.suspendMe);

router.delete('/me', protect, userController.deleteMe);

router.patch('/me/avatar', protect, upload.single('avatar'), userController.updateAvatar);

router.patch('/me/banner', protect, upload.single('banner'), userController.updateBanner);

module.exports = router;
