import React from 'react'
import { connect } from 'react-redux'

const FootballData = ({ leagueData3 }) => {
//console.log(leagueData3.name)

    if (leagueData3) {
    return (
        <div>
            <p>{leagueData3.name}</p>
        </div>
    ) 
    } else {
        return null
    }
}
 
const mapStateToProps = (state) => {
    // console.log(' footballData: ', state)
    return {
        leagueData3: state.footballinfo.competition
    }
}

export default connect(mapStateToProps)(FootballData)
