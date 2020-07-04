import React from 'react'
import { connect } from 'react-redux'

const Players = ({ matchInfo }) => {
// console.log('Players.jsx: ', matchInfo)

        return (
            <div>
                <ul>
                    <li>{matchInfo.id}</li>
                    <li>{matchInfo.name}</li>
                    <li>{matchInfo.code}</li>
                    <li>{matchInfo.plan}</li>
                </ul>
            </div>
        )
}

const mapStateToProps = state => {
    // console.log('Players.jsx: ', state.footballinfo)
    return {
        matchInfo: state.footballinfo
    }
}

export default connect(mapStateToProps)(Players)
