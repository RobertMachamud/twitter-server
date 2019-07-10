const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// Database connection
require('./db')

// Routes
app.post('/api/messages', require('./controllers/post_message'))
app.get('/api/messages', require('./controllers/get_messages'))

app.post('/api/hashtags', require('./controllers/post_hashtag'))
app.get('/api/hashtags', require('./controllers/get_hashtags'))

app.get('/api/users', require('./controllers/get_users'))

app.post('/api/signup', require('./controllers/signup'))
app.post('/api/signup', require('./controllers/login'))



// Server
app.listen(process.env.PORT, (err) => {
	if (err) {
		console.log('Error:', err);
	} else {
		console.log(`Ready on Port ${process.env.PORT}`)
	}
})
