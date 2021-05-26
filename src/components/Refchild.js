import React from 'react'

const Refchild = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type='text' ref={ref} />
        </div>
    )
})

export default Refchild