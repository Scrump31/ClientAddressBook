/* eslint no-console: 0 */
// const _ = require('lodash');
const express = require('express');
const router = require('./router');

const app = express();

// App Setup
app.use(express.static(`${__dirname}/public`));
app.use(router);
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
