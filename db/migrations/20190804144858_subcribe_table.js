exports.up = function(knex, Promise) {
	return knex.schema.createTableIfNotExists('subscribe', function(table) {
		table.increments();
		table.text('email');
	});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('subcribe');
};