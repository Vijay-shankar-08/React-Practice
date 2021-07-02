import React, { Component } from 'react'
import Cchild from './Cchild'

class Cparent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "vijay"
        }
    }
    handleChange(item){
        this.setState({
            name:item
        })
    }
    render() {
        return (
            <div>
                <h1>parent</h1>
                <Cchild data={{name:this.state.name,
                    handleChange:this.handleChange.bind(this)}} />

            </div>
        )
    }
}

export default Cparent
