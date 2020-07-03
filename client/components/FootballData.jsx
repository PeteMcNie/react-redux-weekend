import React, { Component } from 'react'
import { connect } from 'react-redux'

const FootballData = ({ footBallData }) => (
        <div>
            <p>{footBallData}</p>
        </div>
    
)

const mapStateToProps = (state) => {
    return {
        footBallData: state.footballinfo['leagueInfo']
    }
}


export default connect(mapStateToProps)(FootballData)
