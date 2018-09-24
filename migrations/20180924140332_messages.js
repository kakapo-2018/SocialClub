
exports.up = function(knex, Promise) {
    return knex.schema.createTable('messages', table => {
      table.increments('id').primary();
      table.integer('posts_id');
      table.string('message');
      table.integer('date');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('messages');
  };
  