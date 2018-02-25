const { expect } = require('chai');
const { Client } = require('../models/client');
const User = require('../models/user');
const { users, mockClients } = require('./seed/seed');
const { ObjectID } = require('../node_modules/mongodb');

before('Clear db before running all tests', async () => {
  await User.remove({});
  await User.insertMany(users);
  await Client.remove({});
  await Client.insertMany(mockClients);
});

describe('Client.find({ _creator: _id })', () => {
  it('should return 2 clients for users[0]._id', async () => {
    const clients = await Client.find({ _creator: users[0]._id });
    expect(clients).to.have.lengthOf(2);
  });

  it('should return 1 client for users[1]._id', async () => {
    const clients = await Client.find({ _creator: users[1]._id });
    expect(clients).to.have.lengthOf(1);
  });
});

describe('new Client({})', () => {
  it('should create a new client for users[0]._id for a total of 3', async () => {
    const client = new Client({
      _id: new ObjectID(),
      name: 'test client 1',
      email: 'test1@mail.com',
      phone: 1234567,
      address: 'test1 address',
      company: 'test1 company',
      notes: 'test1 notes',
      _creator: users[0]._id,
    });
    await client.save();
    const clients = await Client.find({ _creator: users[0]._id });
    expect(clients).to.have.lengthOf(3);
  });
});

describe('Client.findOneAndUpdate({})', () => {
  it('should update mockClients[0] "notes" to "updated!" ', async () => {
    const client = await Client.findOneAndUpdate(
      { name: 'test client 1', _creator: users[0]._id },
      { $set: { notes: 'updated!' } },
      { new: true },
    );
    expect(client.name).to.equal('test client 1');
    expect(client.notes).to.equal('updated!');
  });
});

describe('Client.findOneAndRemove({})', () => {
  it('should delete mockClients[1]', async () => {
    await Client.findOneAndRemove({ name: 'test client 2', _creator: users[0]._id });
    const clients = await Client.find({ _creator: users[0]._id });
    expect(clients).to.have.lengthOf(2);
  });
});
