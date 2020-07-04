import { DATA_POSTED } from '../actions'

function postedData (state = {}, action) {
    switch (action.type) {
        case DATA_POSTED:
            // console.log(action.postedData1)
            return action.postedData1

        default:
            return state
    }
}

export default postedData