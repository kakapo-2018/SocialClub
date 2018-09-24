
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Sandy Beaches', username:'SandyRocks', email:'sandy@hotmail.com', password: 'password123'},
        {id: 2, name: 'John Smith', username:'jsmith', email:'john@gmail.com', password: 'mydog123'},
        {id: 3, name: 'Joe Personal Blog', username:'JPB', email:'joe@xtra.co.nz', password: 'mykid345'}
      ]);
    });
};
