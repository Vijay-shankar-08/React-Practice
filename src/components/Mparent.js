import React, { Component } from 'react'
import Mchild from './Mchild'

class Mparent extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: 'vijay'
        }
    }
    
    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name:'vijayashankar'
            })
        },1000)
    }

    render() {
        console.log('parent')
        return (
            <div>
                <h1>Parent component</h1>
                <Mchild name ={this.state.name} />
            </div>
        )
    }
}

export default Mparent
