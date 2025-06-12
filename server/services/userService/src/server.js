const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 5001;
const DB = process.env.DATA_BASE_URI;

mongoose.connect(DB).then(() => {
  console.log('users data-base service is connected sucessfully');
});

app.listen(port, () => {
  console.log(`server is listning at ${port}`);
});
