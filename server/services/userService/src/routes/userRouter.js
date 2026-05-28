const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

const authMiddleware = require('../middleware/authMiddleware');

const restrictRoute = require('../middleware/restrictRoute');

router.get('/users', userController.getUsers);

router.post('/createUser', userController.createUser);

router.get('/profile', authMiddleware.protect, userController.getProfile);

router.patch('/deleteAccount', authMiddleware.protect, userController.deleteAccount);

//admin routes
// router.delete('/deleteUser', restrictRoute.restrictRoute('admin').userController.deleteUser);

router.patch(
  '/admin/restore/:id',
  authMiddleware.protect,
  restrictRoute.restrictRoute('admin'),
  userController.restoreAccount
);

module.exports = router;
