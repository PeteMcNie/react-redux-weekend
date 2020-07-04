import React from 'react'
import { Link } from 'react-router-dom'

class Links extends React.Component {
    render() {
        return (
            <div>
                <Link to='players'>Players</Link>
            </div>
        )
    }
}

export default Links
