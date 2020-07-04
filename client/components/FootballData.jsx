import React, { Component } from 'react'
import { connect } from 'react-redux'

const FootballData = ({ leagueData3 }) => (
        <div>
            <p>{leagueData3}</p>
        </div>
    
)

const mapStateToProps = (state) => {
    return {
        leagueData3: state.footballinfo['leagueData2']
    }
}


export default connect(mapStateToProps)(FootballData)
