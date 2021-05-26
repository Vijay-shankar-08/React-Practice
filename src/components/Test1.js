import React, { Component } from 'react'
import TestChild from './TestChild'

class Test1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: "starwars"
        }
    }

    render() {

        return (
            <div>

                <TestChild name={this.state.movie} />

                <button onClick={() => { this.setState({ movie: "Avengers" }) }}>click</button>
            </div>
        )
    }
}

export default Test1
