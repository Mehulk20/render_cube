module.exports = {
  protect: require('./protect').protect,
  restrictTo: require('./restrict-to').restrictTo,
  catchAsyncError: require('./catch-async-error'),
};
