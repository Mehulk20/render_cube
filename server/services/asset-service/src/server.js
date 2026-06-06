const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 5002;
const DB = process.env.DATA_BASE_URI;

mongoose.connect(DB).then(() => {
  console.log('asset data-base connection sucessfull');
});

app.listen(port, () => {
  console.log(`server listining at ${port}`);
});
