import { getDataApi } from '../api'

export const REQUEST_DATA = 'REQUEST_DATA'

export const requestData = () => {
    return {
        type: REQUEST_DATA
    }
}

export function getData (leagueRequested) {
    console.log('Actions: ', leagueRequested)
    return (dispatch) => {
        dispatch(requestData())
        getDataApi(leagueRequested)
    }
}