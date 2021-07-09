import React from "react";
import PropTypes from "prop-types";

function WinningComponent({ scores }) {
  let sum = Object.entries(scores).map(([key, value]) => {
    return value.reduce((a, b) => a + b);
  });
  let keys = Object.entries(scores).map(([key, value]) => {
    return key;
  });
  let max;
  for (let i = 0; i < sum.length; i++) {
    for (let j = 1; j < sum.length; j++) {
      if (sum[i] > sum[j]) {
        max = i;
        j++;
      } else if (sum[i] < sum[j]) {
        max = j;
        i++;
      } else if (sum[i] === sum[j]) {
        max = "drawn";
        j++;
      }
    }
  }
  function sumValues(value){
    let total =0
    for (let num of value){
      total = total + num
    }
    return total
  }
  
  console.log(max);
  console.log(sum);
  console.log(keys);
  return (
    <>
      <div>
        {max === "drawn" ? (
          <h1>Match was Drawn</h1>
        ) : (
          <h1>{keys[max]} has won of the Game</h1>
        )}
      </div>
      <div>
      {Object.entries(scores).map(([key, value]) => {
          return(
              <div><h1>{key}:[{value.join(',')}]</h1><br/>
              <h1>total:{sumValues(value)}</h1>
              </div>
              
          )
      })}
      {/* <table>
          <tbody>
              <tr>
                  <th>Player</th>
                  <th>Points</th>
              </tr>
              {/* Render dynamic rows*/}
              {/* {total.map(item => {
                item.map((detail,index) => {
                  return(
                    <tr key={index}>
                        <td>{detail.key}</td>
                        <td> {detail.value}</td>
                        
                    </tr>
                  )
                })
              })}
          </tbody>
      </table> */} */
      </div>
    </>
  );
}

WinningComponent.prototype = {
  scores: PropTypes.array.isRequired,
};

export default WinningComponent;
