import React, { Component } from 'react'
import Mark from './Mark'
// import Mark2 from './Mark2'

class ParentMark extends Component {
    constructor(props){
        super(props);
        this.handleState=this.handleState.bind(this)
        this.state= {
            Value: ''
        }
    }
    handleState(value){
        this.setState({
            Value: value
        })
    }

    render() {
        return (
            <div>
                <Mark Value={this.state.Value} handleState={this.handleState} Pmessage='Pass' Nmessage= 'Fail'/>
                <Mark Value={this.state.Value*2} handleState={this.handleState}  Pmessage='Pass' Nmessage= 'Fail'/>
            </div>
        )
    }
}

export default ParentMark
