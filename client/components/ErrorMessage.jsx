import React from 'react'
import { connect } from 'react-redux'

const ErrorMessage = (props) => {
    console.log('ErrorMessage.jsx: ', props)
return (
    <div>
        <h3>Error</h3>
    </div>
)
}

export default ErrorMessage