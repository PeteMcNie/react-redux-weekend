const path = require('path')
const express = require('express')

const server = express()

const footballRoutes = require('./routes/footballRoutes')

// server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/football', footballRoutes)

module.exports = server
