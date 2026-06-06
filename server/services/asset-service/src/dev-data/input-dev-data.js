const mongoose = require('mongoose');
const fs = require('fs');

const DB = process.env.DATA_BASE_URI;
const Assets = require('../models/asset-model');

mongoose.connect(DB).then(() => {
  console.log('connected to asset DB for data push');
});

const assets = JSON.parse(fs.readFileSync(`${__dirname}/assetDevData.json`, 'utf-8'));

const importDevData = async () => {
  try {
    await Assets.create(assets);
    console.log('inventry data pushed successfully');
  } catch (err) {
    console.log(err);
  }
};

//delete all data

const deleteDevData = async () => {
  try {
    await Assets.deleteMany();
    console.log('all data removed from the inventory');
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importDevData();
}
if (process.argv[2] === '--delete') {
  deleteDevData();
}
