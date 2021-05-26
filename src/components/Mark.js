import React, { Component } from 'react'
import Message from './Message'


class Mark extends Component {
    constructor(props){
        super(props)
        this.handleMarkChange=this.handleMarkChange.bind(this)
    }
    handleMarkChange(event){
        this.props.handleState(event.target.value)
    }
    render() {
        let Value = this.props.Value
        return (
            <div>
                <fieldset>
                    <p>enter your unit test mark</p>
                    <input value ={Value} onChange={this.handleMarkChange}></input>
                </fieldset>
                <Message value= {Value} Pmessage = {this.props.Pmessage} Nmessage = {this.props.Nmessage} />
            </div>
        )
    }
}


export default Mark
