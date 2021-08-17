import React, { useState } from 'react'
import Select from 'react-select';
import './index.css'

function  MyCounter() {

    const [counterValue, setCounterValue] = useState(0)
    const [inputValue, setInputValue]= useState(1)
    
    const handleAdd = () => {
       setTimeout(() => setCounterValue(counterValue+inputValue),200)
    }

    const handleSub = () => {
        setCounterValue(counterValue-inputValue)
    }

    const options = [
        { value: "red", label: "Red" },
        { value: "green", label: "Green" },
        { value: "blue", label: "Blue" },
      ];
      const [color, setColor] = React.useState(options[0]);


    return(
        <div>
            <center>
            <h3 
            aria-label='header'
            >
                My Counter
            </h3>
            <h3 
            aria-label='counter'
            className={`${counterValue >=100 ? "green" : ""}${counterValue <= -100 ? "red" : ""}`}
            >
                {counterValue}
            </h3>
            <button aria-label='subtract-Btn' onClick={handleSub}>-</button>
            <input 
            aria-label='input' 
            type='number' 
            value={inputValue} 
            className='text-center'
            onChange={(e) => {
                setInputValue(parseInt(e.target.value))
            }}
            />
            <button aria-label='add-Btn' onClick={handleAdd}>+</button>
            </center>
            <h1>Your favorite color is {color.label}</h1>
            <Select
            options={options}
            value={color}
            aria-label={color.label}
            onChange={(value) => {
                setColor(value);
               }}
            />
        </div>
    )
}

export default MyCounter