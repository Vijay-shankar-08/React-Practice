import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Pure extends PureComponent {
    render() {
        console.log("pure")
        return (
            <div>
                Pure Component
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

Pure.defaultProps = {
    name: "vijay"
}

Pure.propsTypes = {
    name: PropTypes.string,
}

export default Pure

