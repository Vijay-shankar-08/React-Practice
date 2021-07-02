import React, { Component } from 'react'

class Badminton extends Component {
    constructor(props){
        super(props);
        this.state= { 
            totalRounds:'',
            numberOfPlayers:'',
            currentRound:0,
            player: '',
            point:'',
            scores:[],
            detials:[],
            playersList: ['playerOne','playerTwo','playerThree','playerFour','playerFive'],
            options: []
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
        for( let i=0; i< evt.target.value; i++){
            this.state.options.push(this.state.playersList[i])
       }
    }

    handlePlayersPoint = (evt) => {
        this.setState({
            points:evt.target.value
        })
    }

    handlePointsChange = () => {
        
        let points = this.state.points
        let obj = { points }
        this.setState({
            scores:[obj, ...this.state.scores]
        })
        // target arr = [
        //     {playerOne:
        //         {
        //         roundOne: 20,
        //         roundTwo:22
        //         }
        //     },
        //     playeTwo:
        //     {
        //         roundOne: 19,
        //         roundTwo: 22
        //     }
        // ]
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
    }

    handlePageChange = (evt) => {
        evt.preventDefault();
        // let current = this.state.currentRound
        this.setState({
            currentRound: this.state.currentRound + 1
         })
        
    }

    render() {
        console.log(this.state.numberOfPlayers)
        console.log(this.state.totalRounds)
        console.log("eeeee",this.state.options)
        console.log("dhhdh",this.state.scores)
        return(
            <div>
                <div>
                    {this.state.currentRound && this.state.currentRound <= this.state.totalRounds ? 
                    <div><center><h1>Round{this.state.currentRound}</h1></center>
                    Select Player<select>
                    {this.state.options.map(item =>{
                        return(
                            <option >{item}</option>
                        )
                    })} 
                    </select>
                    Enter Ponits:<input type='text' onChange={this.handlePlayersPoint}></input><br />
                    <button type='button' onClick={this.handlePointsChange}>ADD</button>
                    </div> : this.state.currentRound > this.state.totalRounds ? 
                    <div>
                        <h1>Winning Page</h1>
                    </div> :
                        <div>
                            Enter total Round <input type='text' value={this.state.totalRounds}  name = 'totalRounds' onChange={this.handleRoundsChange}></input>
                            Enter total Players <input type='text' value={this.state.numberOfPlayers} name = 'numberOfPlayers' onChange={this.handleNumberOfPLayersChange}></input>
                        </div>
                    }
                </div>
               <div><button type='button' onClick={this.handlePageChange}>Next</button></div> 
            </div>
        )
    }
}

export default Badminton