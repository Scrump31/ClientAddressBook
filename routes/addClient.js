const express = require('express');
const _ = require('lodash');
const { Client } = require('../models/client');

const router = express.Router();

router.get('/add', (req, res) => {
  res.render('add-client', { title: 'Add Client' });
});

router.post('/add', (req, res) => {
  const body = _.pick(req.body, [
    'name', 'email', 'address', 'company', 'notes',
  ]);
  const client = new Client(body);

  client.save().then(() => {
    res.send(client);
  }).catch(e => res.status(400).send(e));
});

module.exports = router;
