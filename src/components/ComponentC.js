import React, { Component } from 'react'
import ComponentD from './ComponentD'
import UserContext from './userContext'

class ComponentC extends Component {
    render() {
        return (
            <div>
                <h1>{this.context}</h1>
                <ComponentD />
            </div>
        )
    }
}


ComponentC.contextType = UserContext
export default ComponentC
