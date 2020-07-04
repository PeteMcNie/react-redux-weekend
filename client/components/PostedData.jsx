import React from 'react'
import { connect } from 'react-redux'


const PostedData = ({ postedData2 }) => 
//console.log('postedData3: ', postedData3)
// const { name, number, email } = postedData3.postedData2
     (
        <div>
            <p>Name: {postedData2.name}</p>
            <p>Number: {postedData2.number}</p>
            <p>Email: {postedData2.email}</p>
        </div>
    )


const mapStateToProps = (state) => {
    console.log(state)
    return {
        postedData2: state.postedData
    }
}

export default connect(mapStateToProps)(PostedData)