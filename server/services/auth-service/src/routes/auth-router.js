const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth-controller');
const authMiddleware = require('../middleware/auth-middleware');

// authenticated user

router.post('/register', authController.register);

router.post('/login', authController.login);

router.post('/logout', authMiddleware.protect, authController.logout);

router.post('/forgot-password', authController.forgotPassword);

router.patch('/reset-password/:token', authController.resetPassword);

//must complete

// router.post('/refresh-token')

//protected

// router.get('/me')

router.patch('/update/password', authMiddleware.protect, authController.updateUserPassword);

router.patch('/update/email', authMiddleware.protect, authController.updateUserEmail);

// router.patch('/deactivate-account')

// internal routes

router.get('/internal/validate/:id', authController.validateUser);

module.exports = router;
