require("dotenv").config();
const { connectDB, getDB } = require("../../../utils/connectdb");

export default async (req, res) => {

  let products = [];

  connectDB((err) => {
    if (!err) {
      getDB()
        .collection("products")
        .find()
        .forEach((product) => {
          products.push(product);
        })
        .then(() => res.status(200).json(products));
    }
  });
};
