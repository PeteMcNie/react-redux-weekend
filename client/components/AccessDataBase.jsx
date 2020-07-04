import React from 'react'
import { connect } from 'react-redux'

import { submitData } from '../actions'

class AccessDataBase extends React.Component {
    state = {
        name: '',
        number: '',
        email: ''
    }

    changeHandlerName = evt => {
        // console.log(evt.target)
        const { value } = evt.target
        this.setState({
            name: value
        })
    }

    changeHandlerNumber = evt => {
        // console.log(evt.target)
        const { value } = evt.target
        this.setState({
            number: value
        })
    }

    changeHandlerEmail = evt => {
        const { value } = evt.target
        // console.log(value)
        this.setState({
            email: value
        })
    }

    submitHandler = (evnt, dispatch) => {
        evnt.preventDefault()
        const dataToSubmit = this.state
        console.log('AccessDateBase.jsx data being submitted: ', dataToSubmit)
        dispatch(submitData(dataToSubmit))
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        Name: <input value={this.state.name} onChange={this.changeHandlerName}/>
                    </div>
                    <div>
                        Number: <input value={this.state.number} onChange={this.changeHandlerNumber}/>
                    </div>
                    <div>
                        Email: <input value={this.state.email} onChange={this.changeHandlerEmail}/>
                    </div>
                    <button onClick={(evnt) => this.submitHandler(evnt, this.props.dispatch)}>Submit Details</button>
                </div>
            </div>
        )
    }
}

export default connect()(AccessDataBase)