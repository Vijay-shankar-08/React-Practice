import React from 'react'

function Message(props) {
    if(props.value>=25){
        return (
            <p>{props.Pmessage}</p>
    )
    }
    else{
        return(
            <p>{props.Nmessage}</p>
        )
    }
}


export default Message