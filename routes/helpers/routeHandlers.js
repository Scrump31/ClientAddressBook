const _ = require('lodash');
const { Client } = require('../../models/client');

exports.login = function login(req, res) {
  try {
    res.render('login', { title: 'Login' });
  } catch (error) {
    res.send(error);
  }
};
exports.getClients = async function getClients(req, res) {
  try {
    const clients = await Client.find();
    res.render('clients', { title: 'Clients', clients });
  } catch (error) {
    res.send(error);
  }
};

exports.addNewClient = function addNewClient(req, res) {
  try {
    res.render('add-client', { title: 'Add Client' });
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

    res.render('edit-client', { title: 'Edit Client', client });
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
    res.render('logout', { title: 'Logout' });
  } catch (error) {
    res.send(error);
  }
};
