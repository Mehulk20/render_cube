const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 5005;
const DB = process.env.DATA_BASE_URI;
//online db for development
const ONLINE_DB = process.env.ONLINE_DB_STRING.replace(
  '<db_password>',
  process.env.ONLINE_DB_PASSWORD
);

async function startServer() {
  try {
    await mongoose.connect(DB);

    console.log('✅ Auth database connected successfully');

    app.listen(port, () => {
      console.log(`🚀 Auth service listening on port ${port}`);
    });
  } catch (err) {
    console.error('===== MongoDB Error =====');
    console.error(err);
    console.error('Name:', err.name);
    console.error('Message:', err.message);

    if (err.cause) {
      console.error('Cause:', err.cause);
    }

    console.error('=========================');

    process.exit(1);
  }
}

startServer();
