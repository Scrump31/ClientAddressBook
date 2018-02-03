/* eslint no-underscore-dangle: "off" */

const request = require('supertest');
const { expect } = require('chai');
const { ObjectID } = require('../node_modules/mongodb');
const app = require('../index');
const { Client } = require('../models/client');

const mockClients = [
  { _id: new ObjectID(),
    name: 'test client 1',
    email: 'test1@mail.com',
    phone: 1234567,
    address: 'test1 address',
    company: 'test1 company',
    notes: 'test1 notes',
  },
  { _id: new ObjectID(),
    name: 'test client 2',
    email: 'test2@mail.com',
    phone: 1122334,
    address: 'test2 address',
    company: 'test2 company',
    notes: 'test2 notes',
  },
];

before('Clear db before running all tests', async () => {
  await Client.remove({});
  await Client.insertMany(mockClients);
});

describe('/clients route:', () => {
  describe('GET /clients', () => {
    it('should render clients template with a list of clients', async () => {
      const getClients = await request(app).get('/clients');
      expect(getClients.status).to.equal(200);
    });
  });

  describe('Client.find()', () => {
    it('should return a list of 2 clients', async () => {
      const getClients = await Client.find();
      expect(getClients).to.have.lengthOf(2);
    });
  });
});

