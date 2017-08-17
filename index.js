/* eslint no-console: 0 */
const express = require('express');
const login = require('./routes/login');
const clients = require('./routes/clients');
const addClient = require('./routes/addClient');
const editClient = require('./routes/editClient');
const logout = require('./routes/logout');
const bodyParser = require('body-parser');
require('./config/config');
require('./db/mongoose');

const app = express();

// App Setup
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(login);
app.use(clients);
app.use(addClient);
app.use(editClient);
app.use(logout);

app.set('view engine', 'ejs');

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}`));
