const express = require('express');

const router = express.Router();

router.get('/clients', (req, res) => {
  res.render('clients', { title: 'Clients' });
});

module.exports = router;
