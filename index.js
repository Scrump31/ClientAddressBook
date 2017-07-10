/* eslint no-console: 0 */
// const _ = require('lodash');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.send('Home page');
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
