import React, { useState } from "react";
import "./index.css";

function MyCounter() {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const handleAdd = () => {
    setTimeout(() => setCounterValue(counterValue + inputValue), 200);
  };

  const handleSub = () => {
    setCounterValue(counterValue - inputValue);
  };
  const [color, setColor] = React.useState('red');
  console.log(color);

  const handleChange = (e) => {
      setColor(e.target.value)
  }

  return (
    <>
      <div>
        <center>
          <h3 aria-label="header">My Counter</h3>
          <h3
            aria-label="counter"
            className={`${counterValue >= 100 ? "green" : ""}${
              counterValue <= -100 ? "red" : ""
            }`}
          >
            {counterValue}
          </h3>
          <button aria-label="subtract-Btn" onClick={handleSub}>
            -
          </button>
          <input
            aria-label="input"
            type="number"
            value={inputValue}
            className="text-center"
            onChange={(e) => {
              setInputValue(parseInt(e.target.value));
            }}
          />
          <button aria-label="add-Btn" onClick={handleAdd}>
            +
          </button>
        </center>
        <select aria-label="select" value={color} onChange={handleChange}>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
        </select>
      </div>
      <div>
        <h1 aria-label="select-output">Your favorite color is {color}</h1>
      </div>
    </>
  );
}

export default MyCounter;
