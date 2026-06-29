const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 5005;
const DB = process.env.DATA_BASE_URI;
//online db for development
const ONLINE_DB = process.env.ONLINE_DB_STRING.replace(
  '<db_password>',
  process.env.ONLINE_DB_PASSWORD
);

mongoose.connect(ONLINE_DB).then(() => {
  console.log('auth data-base service is connected sucessfully');
});

app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});
