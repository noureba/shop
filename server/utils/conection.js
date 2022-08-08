require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.DATA_BASE;

const connection = mongoose.connect(uri, () => {
  console.log('db is conected');
});

module.exports = connection;
