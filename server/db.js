const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = require('knex')(config)

module.exports = {
    postData
}

function getNewData (id, db = database) {
    return db('personalInfo')
        .where('id', id)
        .select()
}


function postData (newData, db = database) {
    // console.log('newData about to be put in db: ', newData)
    return db('personalInfo')
        .insert(newData)
        .then(data => {
            // console.log('data returned after insert to db: ', data)
            return getNewData(data[0])
        })
}