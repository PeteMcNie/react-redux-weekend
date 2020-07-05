import React from 'react'
import { connect } from 'react-redux'


const PostedData = ({ postedData2 }) => {
// console.log('postedData2: ', postedData2)
// const { name, number, email } = postedData3.postedData2

// COMPONENT WILL ONLY DISPLAY IF postedData2 IS NOT UNDEFINED
    if (postedData2) {
        return (
            <div>
                <p>Name: {postedData2.name}</p>
                <p>Number: {postedData2.number}</p>
                <p>Email: {postedData2.email}</p>
            </div>
        )
    } else {
        return null
    }
}


const mapStateToProps = (state) => {
    // console.log(state)
    return {
        postedData2: state.postedData['postedData1']
    }
}

export default connect(mapStateToProps)(PostedData)