import React from 'react'
import { connect } from 'react-redux'

const ErrorMessage = (props) => {
    console.log('ErrorMessage.jsx: ', props)
return (
    <div>
        <h3>{props.errorMessage}</h3>
    </div>
)
}

function mapStateToProps (state) {
    return {
        errorMessage: state.errorMessage
    }
}

export default connect(mapStateToProps)(ErrorMessage)