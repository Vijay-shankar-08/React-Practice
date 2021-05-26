import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'
import PropTypes from 'prop-types'

class Click extends Component {
    render() {
        const { count, increment } = this.props
        return (
            <div>
                <button onClick={increment}>clicked  {count} times</button>
            </div>
        )
    }
}

Click.defaultProps = {
    count: PropTypes.number
}

Click.propTypes = {
    count: PropTypes.number,
    increment: PropTypes.func
}




export default UpdatedComponent(Click)   //here we can also pass another argument to use hsc for ideal operations
                                        // like (click,5)