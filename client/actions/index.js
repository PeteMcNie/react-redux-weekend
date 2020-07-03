// import { getDataApi } from '../api'
import request from 'superagent'


export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const SHOW_ERROR = 'SHOW_ERROR'

export const requestData = () => {
    return {
        type: REQUEST_DATA
    }
}

export const receiveData = (footballData) => {
    return {
        type: RECEIVE_DATA,
        footballData
    }
}

export const showError = (errMessage) => {
    return {
        type: SHOW_ERROR,
        errorMesaage: errMessage
    }
}

export function getData (leagueRequested) {
    // console.log('Actions: ', leagueRequested)
    return (dispatch) => {
        dispatch(requestData())
        return request
        .get(`api/v1/football/${leagueRequested}`)
        .then(response => {
            console.log('actions.js: ', response.body.competition.name)
            dispatch(receiveData(response.body.competition.name))
        })
        .catch(err => {
            dispatch(showError(err.message))
        })
    }
}