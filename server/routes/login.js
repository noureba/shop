const express = require('express');

const router = express.Router();
const passport = require('passport');

router.post(
  '/',
  passport.authenticate('local', {
    failureRedirect: 'http://localhost:3000/login',
    successRedirect: 'http://localhost:3000/profile',
  }),
).get('/', (req, res) => {
  res.json(req.user);
});

module.exports = router;
