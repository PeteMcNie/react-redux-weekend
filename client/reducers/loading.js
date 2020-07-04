import {
    REQUEST_DATA,
    RECEIVE_DATA,
    SHOW_ERROR
} from '../actions'

const loading = (state = false, action) => {
    // console.log('loading reducer called', state, action)
    switch (action.type) {
        case REQUEST_DATA:
            // console.log('Request data')
            return true

        case RECEIVE_DATA:
            // console.log("receive data")
            return false
            
        case SHOW_ERROR:
            return false

        default:
            return state
    }
}

export default loading