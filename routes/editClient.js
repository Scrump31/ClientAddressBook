const express = require('express');
const _ = require('lodash');
const { Client } = require('../models/client');

const router = express.Router();

router.get('/edit/:id', (req, res) => {
  const id = req.params.id;
  Client.findById(id).then((client) => {
    // Check if ID exists in collection
    if (!client) return res.status(404).send();
    return res.render('edit-client', { title: 'Edit Client', client });
  }).catch(() => res.status(400).send());
});

router.post('/edit/:id', (req, res) => {
  const id = req.params.id;
  const body = _.pick(req.body, [
    'name', 'email', 'phone', 'address', 'company', 'notes',
  ]);

  Client.findByIdAndUpdate(id, { $set: body }, { new: true }).then((client) => {
    if (!client) return res.status(404).send();
    return res.redirect('/clients');
  }).catch(() => res.status(400).send());
});


module.exports = router;
