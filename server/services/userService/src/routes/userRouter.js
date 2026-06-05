const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

const authMiddleware = require('../middleware/authMiddleware');

const restrictRoute = require('../middleware/restrictRoute');

router.get('/users', userController.getUsers);

// internal
router.post('/internal/users', userController.createUser);

// authenticated user
router.get('/me', authMiddleware.protect, userController.getProfile);

router.patch('/me', authMiddleware.protect, userController.updateAuthUser);

router.delete('/me', authMiddleware.protect, userController.deleteAccount);

// admin
router.patch(
  '/admin/users/:id/restore',
  authMiddleware.protect,
  restrictRoute.restrictRoute('admin'),
  userController.restoreAccount
);

module.exports = router;
