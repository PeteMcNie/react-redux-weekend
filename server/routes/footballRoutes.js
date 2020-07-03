const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

//define football routes here

router.get('/:league', (req, res) => {
    // console.log('football routes.js: ', req.params.league)
    request
        .get(`https://api.football-data.org/v2/competitions/${req.params.league}/matches`)
        .set('X-Auth-Token', '72c4befa6979477fa1cc3caaab5f459d')
        .end((err, response) => {
            if(err) {
                res.status(500).send(err.message)
            } else {
                // console.log('footballRoutes.js response: ', response.body)
                res.json(response.body)
            }
        })
})



module.exports = router