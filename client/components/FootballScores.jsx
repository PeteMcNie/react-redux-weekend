import React, { Component } from 'react'
import { connect } from 'react-redux'

export class FootballScores extends Component {
    state = {
        name: ''
    }
    
render () {
    return (
        <div>
            
        </div>
    )
    }
}

const mapStateToProps = (state) => ({
    
})


export default connect(mapStateToProps)(FootballScores)
