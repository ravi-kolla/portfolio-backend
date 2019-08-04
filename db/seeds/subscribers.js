exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('subscribe').del()
    .then(function () {
      // Inserts seed entries
      return knex('subscribe').insert([
        {
        	id:1,
        	email: 'ravitejakolla@outlook.com'
        }
      ]);
    });
};