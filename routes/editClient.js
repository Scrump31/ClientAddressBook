const express = require('express');

const router = express.Router();

router.get('/edit', (req, res) => {
  res.render('edit-client', { title: 'Edit Client' });
});

module.exports = router;
