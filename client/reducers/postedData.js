import { DATA_POSTED } from '../actions'

function postedData (state = {}, action) {
    switch (action.type) {
        case DATA_POSTED:
            // console.log(action.postedData1)
            return {
                postedData1: action.postedData1
            }

        default:
            return state
    }
}

export default postedData