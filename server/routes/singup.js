const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('../modules/user');

router.post('/', async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      id: new mongoose.Types.ObjectId(),
      fullName: req.body.fullName,
      email: req.body.email,
      password: hashPassword,
    });
    newUser.save();
    res.redirect('http://localhost:3000/login');
  } catch (error) {
    res.redirect('http://localhost:3000/singup');
  }
});

module.exports = router;
