const express = require('express');
const router = express.Router();
const User = require('../db/query/subscribe');

function validUser(user){
	const validEmail = typeof user.email == 'string' &&
						user.email.trim() != "" &&
						user.email.trim().length >=6;
	return validEmail;
}

router.post('/signup',(req,res) => {

	if(validUser(req.body)){
		User
		.getOneByEmail(req.body.email)
		.then(user => {
			if(!user){
				const user = {
					email : req.body.email
				};
				User
					.create(user)
					.then (id =>{
						res.json({
							id,
							message: "Signedup for mailing list"
						});
					})
			} else {
				res.json({
					message: "This email is in use"
				});
			}
		});
	} else {
		res.json({
			message: "This email is not valid"
		});
	}
	
});


//module.exports makes this router availabe across the app.
module.exports = router;