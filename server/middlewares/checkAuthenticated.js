function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated) {
    return res.redirect('http://localhost:3000/profile');
  }
  return next();
}

module.exports = checkAuthenticated;
