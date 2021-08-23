import React from 'react'

function Sample (props){
  return(
    <div>
      {props.decision.map((item) => <input
      type='checkbox' 
      name='select' 
      onClick={props.handleChange} 
      value={item}
      checked={props.marked.includes(item)} />
      )}
      {console.log(props.marked)}
    </div>
  )
}

export default Sample