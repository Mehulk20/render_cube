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

// internal routes

router.get('/internal/validate/:id', authController.validateUser);

module.exports = router;
