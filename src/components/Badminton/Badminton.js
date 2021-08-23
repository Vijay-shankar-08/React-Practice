import React, { Component } from 'react'
import WinningComponent from './WinningComponent'

class Badminton extends Component {
    constructor(props){
        super(props);
        this.state= { 
            totalRounds:'',
            numberOfPlayers:'',
            currentRound:0,
            player: 'player',
            point:'',
            options:[],
            scores:{},
        }
    }
    

    handleRoundsChange = (evt) => {
        this.setState({
            totalRounds:evt.target.value
        }) 
    }
    handleNumberOfPLayersChange = (evt) => {
        this.setState({
            numberOfPlayers:evt.target.value
        })
        for( let i= 1; i<= evt.target.value; i++){
            // this.state.options.push(this.state.playersList[i])
                this.setState((prevState) => ({
                    scores:{...prevState.scores,
                        ["player" + i]: []
                    }
                }))   
            
            this.setState(prevState => ({
                options:[...prevState.options,
                    "player" + i
                ]
            }))
        }
    }

    handlePlayerChange = (evt) => {
        this.setState({
            player: evt.target.value
        })
    }

    handlePlayersPoint = (evt) => {
        this.setState({
            point:evt.target.value
        })
    }

    handlePointsChange = () => {
        let players = this.state.player
        let points = this.state.point
        let scores = this.state.scores
        Object.entries(scores).forEach(([key, value]) => {
            key === players && 
                this.setState(prevState => ({
                    scores:{...prevState.scores,
                    [key]:[
                        ...prevState.scores[key],
                        Number(points)
                    ]}
                }))
        })
     }
    
    handlePageChange = (evt) => {
        evt.preventDefault();
        this.setState({
            currentRound: this.state.currentRound + 1
         })
    }
    render() {
        console.log(this.state.totalRounds)
        console.log(this.state.numberOfPlayers)
        console.log(this.state.player)
        console.log("scores=",this.state.scores)
        console.log("options=",this.state.options)
        // let list = this.state.scores
        // let options1 = list.map(item => {
        //     return(
        //         Object.keys(item)
        //     )
        // })
        return(
            <div>
                <div>
                    {this.state.currentRound && this.state.currentRound <= this.state.totalRounds ? 
                    <div><center><h1>Round{this.state.currentRound}</h1></center>
                    Select Player
                    <select name="player" value={this.state.player} onChange={this.handlePlayerChange}>
                        {this.state.options.map((item) => {
                            return <option key={item} value={item}>{item}</option>;
                        })}
                    </select>
                    Enter Ponits:<input type='text' onChange={this.handlePlayersPoint}></input><br />
                    <button type='button' onClick={this.handlePointsChange}>ADD</button>
                    </div> : this.state.currentRound > this.state.totalRounds ? 
                    <div>
                        <WinningComponent scores={this.state.scores} /> 
                    </div> :
                        <div>
                            Enter total Round <input type='text' value={this.state.totalRounds}  name = 'totalRounds' onChange={this.handleRoundsChange}></input>
                            Enter total Players <input type='text' value={this.state.numberOfPlayers} name = 'numberOfPlayers' onChange={this.handleNumberOfPLayersChange}></input>
                        </div>
                    }
                </div>
               <div>{ this.state.currentRound <= this.state.totalRounds ?
                <button type='button' onClick={this.handlePageChange}>Next</button> : null
               } 
               </div>
            </div>
        )
    }
}

export default Badminton
