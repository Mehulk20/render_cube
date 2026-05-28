const AppError = require('./appError');

exports.restrictRoute =
  (...roles) =>
  (req, res, next) => {
    console.log(req.user.role);
    if (!roles.includes(req.user.role)) {
      return next(new AppError('Forbidden access', 403));
    }
    next();
  };
