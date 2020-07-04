// import { getDataApi } from '../api'
import request from 'superagent'

export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const SHOW_ERROR = 'SHOW_ERROR'
export const SENDING_DATA = 'SENDING_DATA'
export const DATA_POSTED = 'DATA_POSTED'


export const requestData = () => {
    return {
        type: REQUEST_DATA
    }
}

export const receiveData = (leagueData1) => {
    return {
        type: RECEIVE_DATA,
        leagueData1
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
        .get(`http://localhost:3000/api/v1/football/${leagueRequested}`)
        .then(response => {
            // console.log('actions.js: ', response.body.competition)
            dispatch(receiveData(response.body.competition))
        })
        .catch(err => {
            dispatch(showError(err.message))
        })
    }
}


// ACCESS TO DB ACTIONS BELOW

export const sendingData = () => {
    return {
        type: SENDING_DATA
    }
}

export const dataPosted = postedData1 => {
    return {
        type: DATA_POSTED,
        postedData1
    }
}

export function submitData (dataSubmitted) {
    // console.log('actions.js, data to be sent: ',dataSubmitted)
    return (dispatch) => {
        dispatch(sendingData())
        return request
        .post(`http://localhost:3000/api/v1/database`)
        .send(dataSubmitted)
        .then(response => {
            //console.log('actions.js: ', response.body)
            dispatch(dataPosted(response.body))
        })
        .catch(err => {
            dispatch(showError(err.message))
        })
    }
}