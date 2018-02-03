const router = require('express').Router();

const {
  login,
  getClients,
  logout,
  addNewClient,
  postNewClient,
  getEditClient,
  postEditClient,
  deleteClient,
} = require('./helpers/routeHandlers');

router.route('/').get(login);

router.route('/clients').get(getClients);

router
  .route('/add')
  .get(addNewClient)
  .post(postNewClient);

router
  .route('/edit/:id')
  .get(getEditClient)
  .post(postEditClient);

router.route('/delete/:id').post(deleteClient);

router.route('/logout').get(logout);

module.exports = router;
