import React from 'react'
import { connect } from 'react-redux'

import { getData } from '../actions'

class FootballScores extends React.Component {
    state = {
        name: ''
    }

changeHandler = evnt => {
    // console.log(evnt.target.value)
    const { value } = evnt.target
    this.setState({
        value: value
    })
}

render () {
    return (
        <div>
            <input value={this.props.value} onChange={this.changeHandler}/>
            <button onClick={() => this.props.dispatch(getData(this.state.value))}>Get league information!</button>
        </div>
    )
}
}

export default connect()(FootballScores)
