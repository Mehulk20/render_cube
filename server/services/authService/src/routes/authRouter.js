const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');
const authProtectMiddleware = require('../middleware/authProtectMiddleware');

router.post('/signup', authController.userSignup);

router.post('/login', authController.userLogin);

router.post('/forgotPassword', authController.forgotPassword);

router.patch('/resetPassword/:token', authController.resetPassword);

router.post('/logout', authProtectMiddleware.validateTokenVersion, authController.userLogout);

router.patch('/suspend/:id', authController.suspendCredential);

//admin routes

router.patch('/restore/:id', authController.restoreCredential);

module.exports = router;
