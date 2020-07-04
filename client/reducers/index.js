import { combineReducers } from 'redux'

import footballinfo from './footballinfo'
import errorMessage from './errorMessage'
import loading from './loading'
import postedData from './postedData'

export default combineReducers({
// reducers here, don't forget to import them into this file above
    footballinfo,
    errorMessage,
    loading,
    postedData
})