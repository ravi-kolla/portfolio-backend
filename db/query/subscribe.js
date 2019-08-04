const knex = require('../knex');

module.exports = {

  getOneByEmail: function (email) {
    return knex('subscribe').where('email', email).first();
  },
  create: function (user) {
  	return knex('subscribe').insert(user,'id').then(ids => {
  		return ids[0];
  	});
  }

}