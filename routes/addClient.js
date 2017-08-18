const express = require('express');
const _ = require('lodash');
const { Client } = require('../models/client');

const router = express.Router();

router.get('/add', (req, res) => {
  res.render('add-client', { title: 'Add Client' });
});

router.post('/add', (req, res) => {
  const body = _.pick(req.body, [
    'name', 'email', 'phone', 'address', 'company', 'notes',
  ]);
  const client = new Client(body);

  client.save().then(() => {
    res.redirect('/clients');
  }).catch(e => res.status(400).send(e.message));
});

module.exports = router;
