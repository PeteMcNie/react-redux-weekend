
exports.up = function(knex) {
  return knex.schema.createTable('personalInfo', table => {
      table.increments('id')
      table.string('name')
      table.integer('number')
      table.string('email')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('personalInfo')
};
