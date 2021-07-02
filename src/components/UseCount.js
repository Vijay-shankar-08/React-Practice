import React from 'react'

function UseCount({ text , count }) {
    console.log(`rendering ${text}`)
    return (
        <div>
            {text} - {count}
        </div>
    )
}


export default  React.memo(UseCount)