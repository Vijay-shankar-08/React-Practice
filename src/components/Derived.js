import React, { Component } from 'react'
import ChildDerived from "./ChildDerived";

class Derived extends Component {
    constructor() {
        super()
        this.state = {
            data: 0
        }
    }
    render() {
        return (
            <div>
                <h1>Get Increment {this.state.data}</h1>
                <ChildDerived data={this.state.data} />
                <button onClick={() => { this.setState({ data: this.state.data + 1 }) }}> make ++ </button>
            </div>
        )
    }
}

export default Derived
