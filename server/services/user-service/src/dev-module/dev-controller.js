const { AppError, catchAsyncError } = require('@rendercube/shared');
const crypto = require('crypto');

const adminService = require('../services/admin-service');

const authClient = require('../../../auth-service/src/client/auth-client');

const userClient = require('../../../auth-service/src/client/user-client');

const assetClient = require('../../../auth-service/src/client/asset-client');

//development use only
exports.getUserCredentials = catchAsyncError(async (req, res, next) => {
  const response = await authClient.getAllCredentials();

  res.status(200).json({
    status: 'success',
    message: 'data arrived',
    data: response.result
  });
});

exports.getUserProfiles = catchAsyncError(async (req, res, next) => {
  const response = await userClient.getAllUsers();

  res.status(200).json({
    status: 'success',
    message: 'data arrived',
    data: response.result
  });
});

exports.getAllUserAssets = catchAsyncError(async (req, res, next) => {
  const response = await assetClient.getInventory();

  res.status(200).json({
    status: 'success',
    message: 'data arrived',
    data: response.result
  });
});

exports.insertDevData = catchAsyncError(async (req, res, next) => {
  const data = req.body;

  const authData = [];
  const userData = [];
  const failedUsers = [];

  try {
    const emails = data.map((user) => user.email);

    const existingUsers = await authClient.getAllExisting(emails);

    const existingEmails = new Set(existingUsers.result.map((user) => user.email));

    for (const user of data) {
      const { email, username, password, confirmPassword, role, bio, avatar } = user;

      const userId = `usr_${crypto.randomUUID()}`;

      // Email already exists
      if (existingEmails.has(email)) {
        failedUsers.push({
          success: false,
          email,
          username,
          message: `${email} already exists in database`
        });
        continue;
      }

      // Missing password
      if (!password || !confirmPassword) {
        failedUsers.push({
          success: false,
          email,
          username,
          message: 'Password and confirmPassword are required'
        });
        continue;
      }

      // Password mismatch
      if (password !== confirmPassword) {
        failedUsers.push({
          success: false,
          email,
          username,
          message: 'Password and confirmPassword must match'
        });
        continue;
      }

      authData.push({
        userId,
        email,
        username,
        role,
        password
      });

      userData.push({
        userId,
        email,
        username,
        bio,
        avatar
      });
    }

    if (authData.length === 0) {
      return res.status(400).json({
        status: 'failed',
        message: 'No valid users to create',
        failedUsers
      });
    }

    // Create credentials first
    const authResponse = await authClient.createCredentials(authData);

    try {
      // Create user profiles
      const userResponse = await userClient.createUsers(userData);

      return res.status(201).json({
        status: 'success',
        message: 'Users created successfully',
        createdCount: authData.length,
        failedCount: failedUsers.length,
        failedUsers,
        authResponse,
        userResponse
      });
    } catch (userError) {
      // Rollback auth records if user creation fails

      const userIds = authData.map((user) => user.userId);

      try {
        await authClient.deleteCredentialsByUserIds(userIds);
      } catch (rollbackError) {
        console.error('Auth rollback failed:', rollbackError.message);
      }

      return res.status(500).json({
        status: 'failed',
        message: 'User creation failed. Auth records rolled back.',
        error: userError.message
      });
    }
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      status: 'failed',
      message: err.message || 'Internal Server Error'
    });
  }
});
