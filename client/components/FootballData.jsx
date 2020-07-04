import React from 'react'
import { connect } from 'react-redux'

const FootballData = ({ leagueData3 }) => {
//console.log(leagueData3.name)
    return (
        <div>
            <p>{leagueData3.name}</p>
        </div>
    )
}
 
const mapStateToProps = (state) => {
    // console.log(' footballData: ', state)
    return {
        leagueData3: state.footballinfo
    }
}

export default connect(mapStateToProps)(FootballData)
