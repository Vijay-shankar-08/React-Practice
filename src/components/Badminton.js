import React, { Component } from 'react'

class Badminton extends Component {
    constructor(props){
        super(props)
        this.state ={
            playerOnePoints:0,
            playerTwoPoints:0
        }
    }
    handleChange = (evt) => {
        if(this.state.playerOnePoints < 21 || this.state.playerTwoPoints < 21){
            this.setState({
                [evt.target.name]:this.state.evt.name+1
            })
        }
        
    }
    render() {
        return (
            <div>
                <center><h1>Score Board</h1></center>
                <h1>Sets Completed: </h1> 
                <h2>Player 1:{this.state.playerOnePoints}</h2>  <h1>sets won:{this.state.setsWonByPlayer1}</h1>
                <button type='button' name = 'playerOnePoints' onClick={this.handleChange}>+</button>  
                <h2>Player 2:{this.state.playerTwoPoints}</h2>  <h1>sets won:{this.state.setsWonByPlayer2}</h1>
                <button type='button' name = 'playerTwoPoints'  onClick={this.handleChange}>+</button> 
                <div>
                    {(this.state.setsWonByPlayer1>this.state.setsWonByPlayer2)? <h1>player 1 won the match tonight</h1> : <h1>player 2 won the match  tonigh</h1>}
                </div>

            </div>
        )
    }
}

export default Badminton
