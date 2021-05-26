import React, { Component } from 'react'
import Test2Child from './Test2Child'

class Test2 extends Component {
    constructor() {
        super()
        this.state = {
            salary: 1000
        }
    }
    chnageSalary = (extra) => {
        this.setState({ salary: this.state.salary + extra })
    }
    render() {
        return (
            <div>
                {/* <h1>{this.state.salary}</h1> */}
                <Test2Child amount={this.state.salary}
                    increment={this.chnageSalary} />
            </div>
        )
    }
}

export default Test2
