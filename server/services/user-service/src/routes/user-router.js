const express = require('express');
const router = express.Router();

const userController = require('../controllers/user-controller');

const authMiddleware = require('../middleware/auth-protect-middleware');

const restrictRoute = require('../middleware/restrict-route');

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

//development use only

router.post('/internal/import', userController.importAllData);
router.delete('/internal/delete', userController.deleteAllData);

module.exports = router;
