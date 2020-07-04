const path = require('path')
const express = require('express')

const server = express()

const footballRoutes = require('./routes/footballRoutes')
const databaseRoutes = require('./routes/databaseRoutes')

// server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/football', footballRoutes)
server.use('/api/v1/database', databaseRoutes)

module.exports = server
