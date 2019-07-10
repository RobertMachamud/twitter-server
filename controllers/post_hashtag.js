const db_hashtag = require('../models/hashtag')

module.exports = (req, res) => {
	db_hashtag.create(req.body).then( (data) => {
		res.send(data)
	}).catch( (err) => {
		res.send(err)
	})
}
