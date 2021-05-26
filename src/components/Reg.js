import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Reg extends Component {
    render() {
        console.log("reg")
        return (
            <div>
                Regular
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}


Reg.defaultProps = {
    name: "vijay"
}

Reg.propsTypes = {
    name: PropTypes.string.isRequired,
}

export default Reg
