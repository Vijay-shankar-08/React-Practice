import React, { Component } from 'react'


class TestChild extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)

    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>movie {this.props.name}</h1>
            </div>
        )
    }
}

export default TestChild
