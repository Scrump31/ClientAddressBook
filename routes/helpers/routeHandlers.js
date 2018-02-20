const _ = require('lodash');
const { Client } = require('../../models/client');
const passport = require('passport');

exports.login = function login(req, res) {
  try {
    res.render('login', { title: 'Login', user: req.user });
  } catch (error) {
    res.send(error);
  }
};

exports.authGoogle = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

// callback route for google to redirect to
exports.authGoogleRedirect = function authGoogleRedirect(req, res) {
  // res.send(req.user);
  res.redirect('/clients');
};

exports.getClients = async function getClients(req, res) {
  try {
    const clients = await Client.find();
    res.render('clients', { title: 'Clients', clients, user: req.user });
  } catch (error) {
    res.send(error);
  }
};

exports.addNewClient = function addNewClient(req, res) {
  try {
    res.render('add-client', { title: 'Add Client', user: req.user });
  } catch (error) {
    res.send(error);
  }
};

exports.postNewClient = async function postNewClient(req, res) {
  try {
    const body = _.pick(req.body, ['name', 'email', 'phone', 'address', 'company', 'notes']);
    const client = new Client(body);
    await client.save();
    res.redirect('/clients');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getEditClient = async function getEditClient(req, res) {
  try {
    const id = req.params.id;
    const client = await Client.findById(id);
    // Check if ID exists in collection
    if (!client) res.status(404).send();

    res.render('edit-client', { title: 'Edit Client', client, user: req.user });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.postEditClient = async function postEditClient(req, res) {
  try {
    const id = req.params.id;
    const body = _.pick(req.body, ['name', 'email', 'phone', 'address', 'company', 'notes']);
    const client = await Client.findByIdAndUpdate(id, { $set: body }, { new: true });
    if (!client) res.status(404).send();
    res.redirect('/clients');
  } catch (error) {
    res.status(404).send();
  }
};

exports.deleteClient = async function deleteClient(req, res) {
  try {
    const id = req.params.id;
    const client = await Client.findByIdAndRemove(id);
        // Check if ID exists in collection
    if (!client) res.status(404).send();
    res.redirect('/clients');
  } catch (error) {
    res.status(400).send();
  }
};

exports.logout = function logout(req, res) {
  try {
    req.logout();
    res.render('logout', { title: 'Logout' });
  } catch (error) {
    res.send(error);
  }
};
