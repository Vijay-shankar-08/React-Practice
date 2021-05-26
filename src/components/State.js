import React, { Component } from 'react'

class State extends Component {
    constructor() {
        super()
        this.state = {
            name: "Vijayashankar"
        }
    }
    changeName() {
        this.setState({
            name: "Athesh"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={() => this.changeName()}>change</button>
            </div>
        )
    }
}

export default State
