// const express = require('express');
// const _ = require('lodash');
// const { Client } = require('./models/client');
//
// const router = express.Router();
//
// // // index route
// // router.get('/', (req, res) => {
// //   res.render('login', { title: 'Login' });
// // });
// // // clients route
// // router.get('/clients', (req, res) => {
// //   res.render('clients', { title: 'Clients' });
// // });
//
// // // add routes
// // router.get('/add', (req, res) => {
// //   res.render('add-client', { title: 'Add Client' });
// // });
// //
// // router.post('/add', (req, res) => {
// //   const body = _.pick(req.body, [
// //     'name', 'email', 'address', 'company', 'notes',
// //   ]);
// //   const client = new Client(body);
// //
// //   client.save().then(() => {
// //     res.send(client);
// //   }).catch(e => res.status(400).send(e));
// // });
//
// // // edit route
// // router.get('/edit', (req, res) => {
// //   res.render('edit-client', { title: 'Edit Client' });
// // });
//
// // // logout route
// // router.get('/logout', (req, res) => {
// //   res.render('logout', { title: 'Logout' });
// // });
//
// module.exports = router;
