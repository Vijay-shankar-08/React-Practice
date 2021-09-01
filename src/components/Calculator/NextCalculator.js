/* eslint-disable no-eval */
import React, { useState, useEffect, useRef } from "react";
import "./Calc.css";

function NextCalculator() {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());
    // useEffect(()=>{
    //     handleClick()
    // },[result>2])

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <div className="calc-app">
      <from>
        <input type="text" aria-label="result" value={result} ref={inputRef} />
      </from>

      <div className="keypad">
        <button id="clear" onClick={clear}>
          Clear
        </button>
        <button id="backspace" onClick={backspace}>
          C
        </button>
        <button name="+" aria-label="sum" onClick={handleClick}>
          +
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="-" aria-label="sub" onClick={handleClick}>
          -
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="*" aria-label="mul" onClick={handleClick}>
          &times;
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="/" aria-label="div" onClick={handleClick}>
          /
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="." aria-label="point" onClick={handleClick}>
          .
        </button>
        <button id="result" onClick={calculate}>
          Result
        </button>
        {console.log(result)}
      </div>
    </div>
  );
}

export default NextCalculator;