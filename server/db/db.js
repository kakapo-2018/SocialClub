const connection = require('./connection');
const hash = require('../auth/hash');

function getUsers(testDB) {
  const db = testDB || connection;
  return db('users');
}

function createUser(obj, testDB) {
  const db = testDB || connection;
  const username = obj.username;
  const email = obj.email;
  const passwordHash = hash.generate(obj.password);
  return db('users').insert({ username, email, hash: passwordHash });
}

function userExists(username, testDB) {
  const db = testDB || connection;
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0;
    });
}

function getUserByName(username, testDB) {
  const db = testDB || connection;
  return db('users')
    .select()
    .where('username', username)
    .first();
}

function postsCategory(category, testDB) {
  const db = testDB || connection;
  return db('posts')
  .select()
  .where('category', category)
}



module.exports = {
  getUsers,
  userExists,
  createUser,
  getUserByName,
  postsCategory
};