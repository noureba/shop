require("dotenv").config();
const { MongoClient } = require("mongodb");

let dbconnection;

module.exports = {
  connectDB: (cb) => {
    MongoClient.connect("mongodb://localhost:27017/shop")
      .then((client) => {
        dbconnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDB:()=> dbconnection
};
