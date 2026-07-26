const express = require('express');
const router = express.Router();

const upload = require('../../config/multer.config');
const { protect, restrictTo } = require('@rendercube/shared');
const userController = require('../controllers/user-controller');
const { validate } = require('@rendercube/shared');
const {
  updateAboutValidator,
  updateSocialsValidator,
} = require('../../middleware/profile-validator');

router.get('/', userController.getUsers);

// authenticated user
router.get('/me', protect, userController.getMe);

router.patch('/me', protect, userController.updateMe);

router.patch('/suspendMe', protect, userController.suspendMe);

router.delete('/me', protect, userController.deleteMe);

//profile section routes

router.patch('/me/avatar', protect, upload.single('avatar'), userController.updateAvatar);

router.patch('/me/banner', protect, upload.single('banner'), userController.updateBanner);

router.patch('/me/about', protect, validate(updateAboutValidator), userController.updateAbout);

router.patch(
  '/me/socials',
  protect,
  validate(updateSocialsValidator),
  userController.updateMySocials
);

module.exports = router;
