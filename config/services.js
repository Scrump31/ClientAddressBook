/* eslint no-underscore-dangle: "off" */

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const { google } = require('./keys');
const User = require('../models/user');


passport.use(
    new GoogleStrategy({
        // options for the google strategy
      callbackURL: '/auth/google/redirect',
      clientID: google.clientID,
      clientSecret: google.clientSecret,
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function invoked when profile info received from Google

        // check if user already exists in our db
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
            // already have the user
          console.log(`user is ${currentUser.username}`);
          done(null, currentUser);
        } else {
          new User({
            email: profile.emails[0].value,
            username: profile.displayName,
            googleId: profile.id,
            thumbnail: profile._json.image.url,
          }).save().then((newUser) => {
            console.log(`new user created ${newUser}`);
            done(null, newUser);
          });
        }
      });
    }),
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});
