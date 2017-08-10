const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/clients', (req, res) => {
  res.render('clients');
});

router.get('/add', (req, res) => {
  res.render('add-client');
});

router.get('/edit', (req, res) => {
  res.render('edit-client');
});

router.get('/logout', (req, res) => {
  res.render('logout');
});

module.exports = router;
