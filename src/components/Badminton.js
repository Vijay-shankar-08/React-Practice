import React, { Component } from 'react'

class Badminton extends Component {
    constructor(props){
        super(props)
        this.state ={
            totalRounds:0,
            player:'',
            playerOnePoints:0,
            playerTwoPoints:0,
            setsWon:0,
            playerOneWins:0,
            playerTwoWins:0,
            totalPoints: 21,
            setsCompleted:0,
            details:[]
        }
    }
    handleRound = (evt) => {
        this.setState({
            totalRounds: evt.target.value
        })
    }

    handlePlayers = (evt) => {
        this.setState({
            player: evt.target.value
        })
    }

    handleUpdate = (evt) => {
        console.log(evt.target.value)
        if(this.state.player === "playerOne" && evt.target.value <= this.state.totalPoints){
            this.setState({
                playerOnePoints: evt.target.value
            })
        }else if(evt.target.value <= this.state.totalPoints){
            this.setState({
                playerTwoPoints: evt.target.value
            })
        }
    }
    handleSubmit = (evt) =>{
        evt.preventDefault();
        const totalSets = this.state.totalRounds;
        const completedSets = this.state.setsCompleted;
        const winDifference = (totalSets / 2) + 1;
        if(this.state.playerOnePoints === 21){
            this.setState({
                playerOneWins:this.state.playerOneWins + 1,
                setsCompleted:this.state.setsCompleted + 1
            })
        }else{
            this.setState({
                playerTwoWins:this.state.playerTwoWins + 1,
                setsCompleted:this.state.setsCompleted + 1
            })
        }
        if(completedSets === totalSets){
            if(this.state.playerOneWins >= winDifference){
               let  difference = (this.state.playerOneWins - this.state.playerTwoWins)
                return{
                    difference
                }
            }else if (this.state.playerTwoWins >= winDifference){
                let  difference = (this.state.playerTwoWins - this.state.playerOneWins)
                 return{
                     difference
                }
            }
        }
    }

    render() {
        return (
            <div>
                <center><h1>Score Board</h1></center>
                <form onSubmit = {this.handleSubmit}>
                    Enter Total Round:<input type='text' value={this.state.totalRounds} onChnage={this.handleRound}></input> <br />
                    Select Player<select value={this.state.player} onChange={this.handlePlayers}>
                      <option value="playerOne">Player 1</option>
                      <option value="playerTwo">Player 2</option>
                    </select>
                    Ponits:<input type='text'></input><br />
                    <button type='button' onClick={this.handleUpdate}>Update</button>
                    <button type='submit'>Submit</button>
                </form>
               
                <p>Sets Completed:{this.state.setsCompleted} </p>
                <p>
                    {this.state.playerOneWins}
                </p>

            </div>
        )
    }
}

export default Badminton
