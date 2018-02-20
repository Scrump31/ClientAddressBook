const router = require('express').Router();
const passport = require('passport');

const {
  login,
  authGoogle,
  authGoogleRedirect,
  getClients,
  logout,
  addNewClient,
  postNewClient,
  getEditClient,
  postEditClient,
  deleteClient,
} = require('./helpers/routeHandlers');

// Checks logged in credentials for protected routes
const authCheck = (req, res, next) => {
  if (!req.user) {
    // If user not logged in
    res.redirect('/');
  } else {
    // If logged in
    next();
  }
};

router.route('/').get(login);

// callback route for google to redirect to
// first run passport middleware code to retreive profile info
// then use browser cookie to authorize access to protected routes
router.route('/auth/google/redirect').get(passport.authenticate('google'), authGoogleRedirect);

router.route('/auth/google').get(authGoogle);

router.route('/clients').get(authCheck, getClients);

router
  .route('/add')
  .get(authCheck, addNewClient)
  .post(authCheck, postNewClient);

router
  .route('/edit/:id')
  .get(authCheck, getEditClient)
  .post(authCheck, postEditClient);

router.route('/delete/:id').post(authCheck, deleteClient);

router.route('/logout').get(authCheck, logout);

module.exports = router;
