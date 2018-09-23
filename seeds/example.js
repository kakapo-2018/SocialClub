exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'Jake', email: 'a@b.com' },
        { id: 2, username: 'Bruce', email: 'c@d.com' },
        { id: 3, username: 'Suzuki', email: 'yarn@gmail.com' }
      ]);
    });
};
