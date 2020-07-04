import React from 'react'
import { connect } from 'react-redux'

import { getData } from '../actions'

class FootballRequest extends React.Component {
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
            {this.props.children}
        </div>
    )
}
}

export default connect()(FootballRequest)

// a = new Array(5);
// // [, , , ,]
// a[0] // NOT null, NOT undefined
// {} + []
// [] + {}

// if (typeof(thing) !== 'undefined') {
//     do_something_with(thing);
// }