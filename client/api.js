import request from 'superagent'

const serverUrl = 'http://localhost:3000/api/v1/football'

export function getDataApi (leagueRequested) {
    console.log('Api: ', leagueRequested)
    return request
        .get(serverUrl)

}