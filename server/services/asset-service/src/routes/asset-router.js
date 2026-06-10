const express = require('express');
const router = express.Router();

const assetController = require('../controllers/asset-controller');
const authMiddleware = require('../middlewares/auth-protect-middleware.');
const restrictionMiddleware = require('../middlewares/restriction-middleware');

router
  .route('/')
  .get(assetController.getAssetes)
  .post(
    authMiddleware.protect,
    restrictionMiddleware.restrictTo('creator', 'admin'),
    assetController.createAssete
  );

router
  .route('/:id')
  .get(assetController.getAssetById)
  .patch(
    authMiddleware.protect,
    restrictionMiddleware.restrictTo('creator', 'admin'),
    restrictionMiddleware.checkAssetOwnership,
    assetController.updateAssetById
  )
  .delete(
    authMiddleware.protect,
    restrictionMiddleware.restrictTo('creator', 'admin'),
    restrictionMiddleware.checkAssetOwnership,
    assetController.deleteAssete
  );

router.patch(
  '/:id/status',
  authMiddleware.protect,
  restrictionMiddleware.restrictTo('creator', 'admin'),
  restrictionMiddleware.checkAssetOwnership,
  assetController.updateAssetStatus
);

router
  .route('/internal/assets')
  .post(
    authMiddleware.protect,
    restrictionMiddleware.restrictTo('admin'),
    restrictionMiddleware.checkAssetOwnership,
    assetController.importAssetData
  )
  .delete(
    authMiddleware.protect,
    restrictionMiddleware.restrictTo('admin'),
    restrictionMiddleware.checkAssetOwnership,
    assetController.deleteAssetData
  );

module.exports = router;
