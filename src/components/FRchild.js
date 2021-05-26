import React from 'react'
import PropTypes from 'prop-types'

// export default function FRchild() {
//     return (
//         <div>
//             <input type= 'text' />
//         </div>
//     )
// }

function FRchild({type, onKeyDown, placeholder},ref){
    return <input ref={ref} type={type} onKeyDown={onKeyDown} placeholder={placeholder} />
}

const forwaredInput = React.forwardRef(FRchild)
export default forwaredInput




FRchild.propTypes ={
    type: PropTypes.string.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
}