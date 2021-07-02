import React from 'react'

function Mchild({name}) {
    console.log("child render")
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default React.memo(Mchild)