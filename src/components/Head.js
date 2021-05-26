import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'
import PropTypes from 'prop-types'

class Head extends Component {
    render() {
        const { count, increment } = this.props
        return (
            <div>
                <h2 onMouseOver={increment}>Hovered{count}times</h2>
            </div>
        )
    }
}


Head.defaultProps = {
    count: PropTypes.number
}

Head.propTypes = {
    count: PropTypes.number,
    increment: PropTypes.func.isRequired,
}



export default UpdatedComponent(Head)  //here we can also pass another argument to use hsc for ideal operations
                                       // like (head,5)
