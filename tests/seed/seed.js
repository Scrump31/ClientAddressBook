const { ObjectID } = require('../../node_modules/mongodb');

const users = [
  {
    _id: new ObjectID(),
    username: 'Test User',
    googleId: 1234567890,
    thumbnail: 'user thumbnail',
  },
  {
    _id: new ObjectID(),
    username: 'Test User 2',
    googleId: 9876543211,
    thumbnail: 'user two thumbnail',
  },
];

const mockClients = [
  {
    _id: new ObjectID(),
    name: 'test client 1',
    email: 'test1@mail.com',
    phone: 1234567,
    address: 'test1 address',
    company: 'test1 company',
    notes: 'test1 notes',
    _creator: users[0]._id,
  },
  {
    _id: new ObjectID(),
    name: 'test client 2',
    email: 'test2@mail.com',
    phone: 1122334,
    address: 'test2 address',
    company: 'test2 company',
    notes: 'test2 notes',
    _creator: users[0]._id,
  },
  {
    _id: new ObjectID(),
    name: 'test client 3',
    email: 'test3@mail.com',
    phone: 1875309,
    address: 'test3 address',
    company: 'test3 company',
    notes: 'test3 notes',
    _creator: users[1]._id,
  },
];

module.exports = { users, mockClients };
