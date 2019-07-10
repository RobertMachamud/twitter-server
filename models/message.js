const db = require('../db')
const mongoose = require('mongoose')

const db_message = db.model('message', {
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
		required: [true, 'Message Author required']
	},
	date: {
		type: Date,
		default: Date.now()
	},
	body: {
		type: String,
		required: [true, 'Message Body is required']
	},
	hashtag: {
		type: String,
		ref: 'hashtag',
		required: [true, 'Message hashtag is required']
	}
})

module.exports = db_message
