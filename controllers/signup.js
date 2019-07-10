const db_user = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	bcrypt.hash(req.body.password, 10, (err, encrypted) => {
		if (err) {
			res.status(300).send('Error:', err)
		} else {
			req.body.password = encrypted
			db_user.crate(req.body).then( (user) => {
				// sign
				let token = jwt.sign(user.toObject(), process.env.SECRET)
				res.status(200).join({
					message: 'You are signed up',
					token: token
				})
			}).catch( (err) => {
				res.send(err)
			})
		}
	})
}
