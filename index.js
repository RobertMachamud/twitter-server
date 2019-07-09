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






// Server
app.listen(process.env.PORT, (err) => {
	if (err) {
		console.log('Error:', err);
	} else {
		console.log(`Ready on Port ${process.env.PORT}`)
	}
})
