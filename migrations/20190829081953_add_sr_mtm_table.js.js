
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_users',function(t){
    t.integer('user_id').references('users.id');
    t.integer('follower_id').references('users.id');
    t.unique(['user_id','follower_id']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_users');
};
