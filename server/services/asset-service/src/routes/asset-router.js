const express = require('express');
const router = express.Router();

const assetController = require('../controllers/asset-controller');
const authMiddleware = require('../middlewares/auth-protect-middleware.');
const restrictionMiddleware = require('../middlewares/restriction-middleware');

const { protect, restrictTo } = require('@rendercube/shared');
router
  .route('/')
  .get(assetController.getAssetes)
  .post(protect, restrictTo('creator', 'admin'), assetController.createAssete);

router
  .route('/:id')
  .get(assetController.getAssetById)
  .patch(
    protect,
    restrictTo('creator', 'admin'),
    restrictionMiddleware.checkAssetOwnership,
    assetController.updateAssetById
  )
  .delete(
    protect,
    restrictTo('creator', 'admin'),
    restrictionMiddleware.checkAssetOwnership,
    assetController.deleteAssete
  );

//Must complete

// router.patch(
//   '/:id/status',
//   protect,
//   restrictTo('creator', 'admin'),
//   restrictionMiddleware.checkAssetOwnership,
//   assetController.updateAssetStatus
// );

// router.get('/:slug');

// router.get('/categories');

// router.get('/search');

// //draft management

// router.post('/')

// router.get('/my-assets')

// router.get('/my-assets/:id')

// router.route('/:id').patch().delete()

//Publishing Workflow

// router.patch('/:id/publish')

// router.patch('/:id/unpublish')

//asset files
// router.patch('/:id/upload-file');

// router.patch('/:id/upload-preview');

// router.patch('/:id/file');

// //engagement
// router.post('/:id/like');

// router.delete('/:id/like');

// router.post('/:id/download');

//internal
router
  .route('/internal/assets')
  .post(
    protect,
    restrictTo('admin'),
    restrictionMiddleware.checkAssetOwnership,
    assetController.importAssetData
  )
  .delete(
    protect,
    restrictTo('admin'),
    restrictionMiddleware.checkAssetOwnership,
    assetController.deleteAssetData
  );

module.exports = router;
