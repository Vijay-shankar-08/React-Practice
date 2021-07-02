import React from 'react'

function UseButton({handleClick , children }) {
    console.log(`rendering ${children}`)
    return (
        <div>
            <button onClick={handleClick}>{children}</button>
        </div>
    )
}

export default React.memo(UseButton)