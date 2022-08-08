require("dotenv").config();
const { connectDB, getDB } = require("../../../utils/connectdb");

export default async (req, res) => {

  let blogs = [];

  connectDB((err) => {
    if (!err) {
      getDB()
        .collection("blogs")
        .find()
        .forEach((product) => {
          blogs.push(product);
        })
        .then(() => res.status(200).json(blogs));
    }
  });
};
