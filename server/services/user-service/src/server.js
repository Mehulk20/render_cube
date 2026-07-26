const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 2525;
const DB = process.env.DATA_BASE_URI;
//online db for development
const ONLINE_DB = process.env.ONLINE_DB_STRING.replace(
  '<db_password>',
  process.env.ONLINE_DB_PASSWORD
);

const startServer = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(DB);
    console.log('✅ User database connected successfully');

    // Start Express server only after DB connection
    app.listen(port, () => {
      console.log(`🚀 User service is listening on port ${port}`);
    });
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB');
    console.error(error.message);
    process.exit(1);
  }
};

startServer();
