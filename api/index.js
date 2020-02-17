const express = require('express')
const routes = require('./routes')
const app = express()

// setup express
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use('/', routes)

module.exports = { path: '/api', handler: app }
