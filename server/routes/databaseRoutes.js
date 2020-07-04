const express = require('express')
// const request = require('superagent')
const db = require('../db')

const router = express.Router()

router.use(express.json())

//define database routes here

router.post('/', (req, res) => {
    const newData = req.body
    // console.log('Server-side: ', newData)
    db.postData(newData)
        .then(data => {
            console.log('data posted then returned to databaseRoutes.js: ', data)
        })
})



module.exports = router