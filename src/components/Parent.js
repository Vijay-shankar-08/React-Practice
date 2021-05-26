import React, { Component } from 'react'
import Pure from './Pure'
import Reg from './Reg'

class Parent extends Component {
    constructor() {
        super()
        this.state = {
            name: "vijay"
        }
    }
    componentDidMount() {
        console.log("did mount");
        setInterval(() => {
            this.setState({
                name: "vijay"
            })
        }, 2000)
    }
    render() {
        console.log("parent")
        return (
            <div>
                Parent
                <Reg name={this.state.name} />
                <Pure name={this.state.name} />
            </div>
        )
    }
}

export default Parent
