


module.exports = {
  AppError: require('./src/utils/app-error'),
  catchAsyncError: require('./src/utils/catch-async-error'),


  restrictTo: require('./src/middlewares/restrict-to').restrictTo,
  protect: require('./src/middlewares/protect').protect,

  // test:'shared packages working'
};
