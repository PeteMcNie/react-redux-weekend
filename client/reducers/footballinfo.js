import { RECEIVE_DATA } from '../actions'

function footballinfo (state = {}, action) {
    switch (action.type) {
        case RECEIVE_DATA: 
            return {
               leagueData2: action.leagueData1
            }  

        default:
            return state
    }

}

export default footballinfo