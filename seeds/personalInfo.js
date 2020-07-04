
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('personalInfo').del()
    .then(function () {
      // Inserts seed entries
      return knex('personalInfo').insert([
        {id: 1, name: 'Pablo', number: 0364, email: 'pablo@pablo.com'}
      ]);
    });
};
