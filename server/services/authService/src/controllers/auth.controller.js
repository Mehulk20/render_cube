const authService = require('../services/authService');
const catchAsyncError = require('../middleware/catchAsyncError');
const AppError = require('../middleware/appError');

//authrization controller
exports.userSignup = catchAsyncError(async (req, res, next) => {
  const result = await authService.signup(req.body);
  console.log(result);

  if (!result) return next(new AppError('Signup failed, retry', 400));

  const token = result.token;

  const user = result.user;

  const cookieOptions = {
    httpOnly: true,

    expires: new Date(Date.now() + Number(process.env.JWT_COOKIE_EXPIRES_IN) * 60 * 60 * 1000),
  };

  res.cookie('jwt', token, cookieOptions);

  res.status(201).json({
    status: 'success',
    token: token,
    data: user,
  });
});

exports.userLogin = catchAsyncError(async (req, res, next) => {
  const result = await authService.login(req.body);

  if (!result) return next(new AppError('No user found', 400));

  res.status(201).json({
    status: 'success',
    token: result.token,
  });
});

exports.forgotPassword = catchAsyncError(async (req, res, next) => {
  const email = req.body.email;

  if (!email) return next(new AppError('Please provide your email', 400));

  const result = await authService.forgotPassword({
    email,
    origin: `${req.protocol}://${req.get('host')}`,
  });

  res.status(200).json({
    status: 'success',
    message: 'Passowrd rest email has been sent to your email address',
  });
});

exports.resetPassword = catchAsyncError(async (req, res, next) => {
  const result = await authService.resetPassword({
    token: req.params.token,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });

  if (!result) return next(new AppError('No user found'));

  res.status(201).json({
    status: 'success',
    message: 'passowrd sucessfully updated',
    token: result.token,
    data: result.user,
  });
});

exports.userLogout = catchAsyncError(async (req, res, next) => {
  await authService.logout(req.user.id);

  res.status(200).json({
    status: 'success',
    message: 'Logged out successfully',
  });
});

exports.suspendCredential = catchAsyncError(async (req, res, next) => {
  await authService.suspendCredential(req.params.id);

  res.status(200).json({
    status: 'success',

    message: 'User Suspended',
  });
});

//admin controller

exports.restoreCredential = catchAsyncError(async (req, res, next) => {
  const result = await authService.restoreCredential(req.params.id);
  res.status(200).json({
    status: 'success',
    message: 'Credential restored',
  });
});
