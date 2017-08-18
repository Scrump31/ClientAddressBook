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

module.exports = router;
