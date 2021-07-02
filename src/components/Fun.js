import React, { Component } from 'react'

class Fun extends Component {
    constructor(props){
        super(props);
        this.state = {
            player: 'santhosh',
            roundOne:23,
            arr: []
        }

    }
    handleChange = () =>{
        this.setState({
            player:"vijay"
        })
    }
    handlePointChange = () => {
        let player = this.state.player
        let roundOne = this.state.roundOne
        player={roundOne}
        let obj = {player}
        this.setState({
            arr:[{
                obj
            }]
        })
    }
    render() {
        // console.log(this.state.arr)
        
        return (
            <div>
                <div><button type='button' onClick={this.handleChange}>click</button></div>
                <div><button type='button' onClick={this.handlePointChange}>click</button></div>
                <h1>hiii{this.state.player}</h1>
                {console.log(this.state.arr)}
                {/* <input type='text' placeholder='enter point' onchange={this.handlePointChange}></input> */}
            </div>
        )
    }
}

export default Fun
