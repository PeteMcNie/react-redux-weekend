import React from 'react'
import { connect } from 'react-redux'

const Players = ({ matchInfo }) => {
// console.log('Players.jsx: ', matchInfo)

    if ( matchInfo ) {
        return (
            <div>
                <ul>
                    <li>Home Team: {matchInfo[0].homeTeam.name} {matchInfo[0].score.fullTime.homeTeam}</li>
                    <li>Away Team: {matchInfo[0].awayTeam.name} {matchInfo[0].score.fullTime.awayTeam}</li>
                    {/* <li></li> */}
                    {/* <li>{matchInfo.plan}</li> */}
                </ul>
            </div>
        )
    } else {
        return null
    }
}

const mapStateToProps = state => {
    // console.log('Players.jsx: ', state.footballinfo.matches)
    return {
        matchInfo: state.footballinfo.matches
    }
}

export default connect(mapStateToProps)(Players)
