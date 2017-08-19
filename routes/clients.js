const express = require('express');
const { Client } = require('../models/client');

const router = express.Router();

router.get('/clients', (req, res) => {
  Client.find().then((data) => {
    const listOfClients = data;
    // res.send(clients);
    res.render('clients', { title: 'Clients', listOfClients });
  }, e => res.status(400).send(e));
});

router.post('/delete/:id', (req, res) => {
  const id = req.params.id;

  Client.findByIdAndRemove(id).then((client) => {
    // Check if ID exists in collection
    if (!client) return res.status(404).send();
    return res.redirect('/clients');
  }).catch(() => res.status(400).send());
});

module.exports = router;
