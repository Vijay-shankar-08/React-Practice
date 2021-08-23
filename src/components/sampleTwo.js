import React, { useState } from 'react'
import Sample from './sample'

function CheckBox() {
  const decision = ['Yes', 'No']
  const [ mark, setMark ] = useState([])

  const handleChange = (e) => {
    setMark([e.target.value])
  }
    return (
      <div>
      <h1>select</h1>
      <Sample marked={mark} decision={decision} handleChange={handleChange} />
      </div>
    )
}


export default CheckBox