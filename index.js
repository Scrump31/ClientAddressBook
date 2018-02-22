/* eslint no-console: 0 */
const express = require('express');
const router = require('./routes/index');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./config/config');
require('./db/mongoose');
require('./config/services');

const app = express();

// App Setup
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Encrypts cookies
app.use(cookieSession({
  name: 'session',
  keys: [process.env.cookieKey],
  maxAge: 24 * 60 * 60 * 1000, // 24 hours
}));

// initalize passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/', router);

app.set('view engine', 'ejs');

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
