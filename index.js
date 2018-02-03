/* eslint no-console: 0 */
const express = require('express');
const router = require('./routes/index');
const bodyParser = require('body-parser');

require('./config/config');
require('./db/mongoose');

const app = express();

// App Setup
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router);

app.set('view engine', 'ejs');

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}`));
