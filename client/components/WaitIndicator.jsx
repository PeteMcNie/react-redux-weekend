import React from 'react'
import { connect } from 'react-redux'

const WaitIndicator = props => {
    console.log(props)
    return props.loading 
    ? <img src='/animated-circle.gif' />
    : null
    
}

function mapStateToProps (state) {
    return {
        loading: state.loading
    }
}


export default connect(mapStateToProps)(WaitIndicator)