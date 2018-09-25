const request = require('supertest');

jest.mock('../server/db/db', () => ({
  getUser: id =>
    Promise.resolve({ id: id, name: 'test user', email: 'test@user.nz' }),
  getUsers: () =>
    Promise.resolve([
      { id: 2, name: 'test user 2', email: 'test2@user.nz' },
      { id: 4, name: 'test user 4', email: 'test4@user.nz' }
    ])
}));

const server = require('../server/server');

test('Test invalid route', () => {
  return request(server)
    .get('/api/')
    .expect(404) // Error 404
    .then(res => {
      expect(res.text).toContain('Cannot'); //Cannot get /
    })
    .catch(err => expect(err).toBeNull());
});

test('Test home route', () => {
  return request(server)
    .get('/')
    .expect(200) // Error 404
    .then(res => {
      expect(res.text).toContain('<div id="app"></div>'); //Cannot get /
    })
    .catch(err => expect(err).toBeNull());
});
