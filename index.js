/* eslint no-console: 0 */
// const _ = require('lodash');
const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/public`));

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('login');
});

app.get('/clients', (req, res) => {
  res.render('clients');
});

app.get('/add', (req, res) => {
  res.render('add-client');
});

app.get('/edit', (req, res) => {
  res.render('edit-client');
});

app.get('/logout', (req, res) => {
  res.render('logout');
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
