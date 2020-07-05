import request from 'superagent'

const serverUrl = 'http://localhost:3000/api/v1/football'

export function getDataApi (leagueRequested) {
    // console.log('Api: ', leagueRequested)
    return request
        .get(`${serverUrl}/${leagueRequested}`)
        .then(response => {
            // console.log('client-side api.js: ', response.body)
            return response.body
        })

}

export function postData (dataSubmitted) {
    return request
        .post(`http://localhost:3000/api/v1/database`)
        .send(dataSubmitted)
        .then(response => {
            console.log('client-side api.js: ', response.body)
            return response.body
        })
}