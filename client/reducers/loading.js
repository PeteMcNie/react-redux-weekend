import {
    REQUEST_DATA,
    RECEIVE_DATA,
    SHOW_ERROR
} from '../actions'

const loading = (state = false, action) => {
    switch (action.type) {
        case REQUEST_DATA:
            return true

        case RECEIVE_DATA:
            return false
            
        case SHOW_ERROR:
            return false

        default:
            return state
    }
}

export default loading