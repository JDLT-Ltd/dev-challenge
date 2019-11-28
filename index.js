const express = require('express')
const mongoose = require('mongoose')
const {port, dbURI} = require('./config/environment')
const bodyParser = require('body-parser')
const router = require('./config/routes')


const app = express()

mongoose.connect(dbURI, { useNewUrlParser: true })

app.use(bodyParser.json())

app.use('/api', router)

app.listen(port, () => console.log(`Up and running on port ${port}`))

module.exports = app
