const express = require('express');
const router = express.Router();

const userController = require('../controllers/user-controller');

const authMiddleware = require('../middleware/auth-protect-middleware');

const restrictRoute = require('../middleware/restrict-route');

router.get('/', userController.getUsers);

// authenticated user
router.get('/me', authMiddleware.protect, userController.getProfile);

router.patch('/me', authMiddleware.protect, userController.updateAuthUser);

router.patch('/suspendAccount', authMiddleware.protect, userController.suspendUserAccount);

router.delete('/me', authMiddleware.protect, userController.deleteAccount);

// admin
router.patch(
  '/admin/users/:id/restore',
  authMiddleware.protect,
  restrictRoute.restrictRoute('admin'),
  userController.restoreAccount
);

// internal
router.post('/internal/userService', userController.createUser);

router.delete('/internal/:id', userController.deleteAccount);

//development use only

router
  .route('/internal/assets')
  .post(userController.importAllData)
  .delete(userController.deleteAllData);

module.exports = router;
