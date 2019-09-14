const express = require('express')
const routes = require('./routes')
const app = express()

// setup express
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use('/api', routes)

module.exports = app
