const db_user = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	console.log(res.body)
	db_user.findOne({email: req.body.email}).then( (user) => {
		if (user) {
			bcrypt.compare(req.body.password, user.password, (err, match) => {
				if (match) {
					let token = jwt.sign(user.toObject(), process.env.SECRET)
					res.status(200).json({
						message: 'You are logged in',
						token: token
					})
				} else {
					res.send('Sorry, invalid password')
				}
			})
		} else {
			res.send('Sorry, email not found')
		}
	}).catch( (err) => {
		res.status(300).send(err)
	})
}
