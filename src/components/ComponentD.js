import React, { Component } from 'react'
import { UserConsumer } from './userContext'
import PropTypes from 'prop-types';
class ComponentD extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    username => {
                        return <div>hello {username}</div>
                    }
                }
            </UserConsumer>
            
        )
    }
}

ComponentD.proptype = {
    username: PropTypes.string
}

export default ComponentD
