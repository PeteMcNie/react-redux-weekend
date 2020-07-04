const express = require('express')
// const request = require('superagent')

const router = express.Router()

router.use(express.json())

//define database routes here

router.post('/', (req, res) => {
    const newData = req.body
    console.log('Server-side: ', newData)
})



module.exports = router