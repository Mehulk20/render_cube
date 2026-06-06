const express = require('express');
const router = express.Router();

const assetController = require('../controllers/asset-controller');
const authMiddleware = require('../middlewares/auth-protect-middleware.');
const restrictionMiddleware = require('../middlewares/restriction-middleware');

router
  .route('/assets')
  .get(assetController.getAssetes)
  .post(
    authMiddleware.protect,
    restrictionMiddleware.restrictTo('owner', 'admin'),
    assetController.createAssete
  );

router
  .route('/assets/:id')
  .get(assetController.getAsset)
  .patch(
    authMiddleware.protect,
    restrictionMiddleware.restrictTo('owner', 'admin'),
    restrictionMiddleware.checkAssetOwnership,
    assetController.updateAsset
  )
  .delete(
    authMiddleware.protect,
    restrictionMiddleware.restrictTo('owner', 'admin'),
    restrictionMiddleware.checkAssetOwnership,
    assetController.deleteAssete
  );

router.patch(
  '/assets/:id/status',
  authMiddleware.protect,
  restrictionMiddleware.restrictTo('owner', 'admin'),
  restrictionMiddleware.checkAssetOwnership,
  assetController.updateAssetState
);

module.exports = router;
