require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const singupRouter = require('./routes/singup');
const loginRouter = require('./routes/login');
const authRouter = require('./routes/auth');
const passportLocal = require('./config/passport-local');

require('./utils/conection');

passportLocal(passport);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: '*',
  credentials: true,
}));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use('/singup', singupRouter);
app.use('/login', loginRouter);

app.use('/auth', authRouter);

app.get('/test', (req, res) => {
  res.json({ name: 'noreddine' });
});

app.listen(port, () => {
  console.log('server is working');
});
