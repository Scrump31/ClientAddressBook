/* eslint no-underscore-dangle: "off" */

const request = require('supertest');
const { expect } = require('chai');
const app = require('../index');

describe('/ "login route":', () => {
  it('sucessfully renders', async () => {
    const login = await request(app).get('/');
    expect(login.status).to.equal(200);
  });
});

describe('Secured routes', () => {
  it('should deny un-authenticated access to /clients and redirect to /', async () => {
    const clients = await request(app).get('/clients');
    expect(clients.status).to.equal(302);
  });

  it('should deny un-authenticated access to /add and redirect to /', async () => {
    const getAdd = await request(app).get('/add');
    expect(getAdd.status).to.equal(302);
    const postAdd = await request(app).post('/add');
    expect(postAdd.status).to.equal(302);
  });

  it('should deny un-authenticated access to /edit/:id and redirect to /', async () => {
    const getEdit = await request(app).get('/edit/:9827597947');
    expect(getEdit.status).to.equal(302);
    const postEdit = await request(app).post('/edit/9827597947');
    expect(postEdit.status).to.equal(302);
  });

  it('should deny un-authenticated access to /delete/:id and redirect to /', async () => {
    const deleteClient = await request(app).post('/delete/39847598347');
    expect(deleteClient.status).to.equal(302);
  });

  it('should deny un-authenticated access to /logout and redirect to /', async () => {
    const logout = await request(app).get('/logout');
    expect(logout.status).to.equal(302);
  });
});
