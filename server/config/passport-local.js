const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../modules/user');

function local(passport) {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      (email, password, done) => {
        User.findOne({ email }, async (err, user) => {
          if (err) throw err;
          if (!user) return done(null, false);
          if (user) {
            const compare = await bcrypt.compare(password, user.password);
            if (compare) {
              return done(null, user);
            }
            return done(null, false);
          }
          return user;
        });
      },
    ),
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({ id }).then(((user) => done(null, user)));
  });
}

module.exports = local;
