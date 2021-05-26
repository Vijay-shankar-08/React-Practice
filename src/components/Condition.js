import React, { Component } from 'react'

class Condition extends Component {
    constructor(){
        super()
        this.state= {
            isLoggedIn : true
        }
    }
    
    render() {
        //short circuit
        return (
            this.state.isLoggedIn && <div>Welcome</div>
        )
        

        // Ternary conditional
        return (
            this.state.isLoggedIn ? 
            <div>Welcome</div> :
            <div>please Login</div>
        )


        //element varibale
        let message 
        if(this.state.isLoggedIn){
            message = <div>welcome</div>
        }else{
            message = <div>pleasesign in</div>
        }
        return (
            <div>{message}</div>
        )
        

        //if-else
        if(this.state.isLoggedIn){
            return (
                <div>
                    <h1>Welcome user</h1>
                </div>
            )
        }else{
            return (
                <div>
                    <h1>Please LogIn</h1>

                </div>
            )
        }
       
    }
}

export default Condition
