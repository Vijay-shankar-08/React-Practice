import React, { Component } from 'react'

class ChildDerived extends Component {

    constructor() {
        super()
        this.state = {
            currentValue: 0
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log("hook", props, state)
        return {
            currentValue: props.data * 2
        }
    }

    shouldComponentUpdate(preProps, prevState) {
        console.log("shouldupdate")
        if (prevState.data !== this.state.currentValue) {   //if(this.state.currentValue == 30)
            return true
        }
        return false
    }
    render() {
        return (
            <div>
                <h1>current Value{this.state.currentValue}</h1>
            </div>
        )
    }
}

export default ChildDerived
