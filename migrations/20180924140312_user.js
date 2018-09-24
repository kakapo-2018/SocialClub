
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user', table => {
      table.increments('id').primary();
      table.string('name');
      table.string('username');
      table.string('email');
      table.string('password');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user');
  };
  