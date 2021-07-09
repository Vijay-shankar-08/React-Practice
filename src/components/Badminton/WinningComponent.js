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
  let total= Object.entries(scores).map(([key, value]) => {
    return(
        {[key]:value}
    )
  })
  console.log(max);
  console.log(sum);
  console.log(keys);
  console.log(total);
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
      {keys.map((item,index) =>{
        return(
          <div key={index}>
            PLAYER:{item}
          </div>
        )
      })}
      {sum.map((item,index) =>{
        return(
          <div key={index}>
            POINT:{item}
          </div>
        )
      })}
      </div>
    </>
  );
}

WinningComponent.prototype = {
  scores: PropTypes.array.isRequired,
};

export default WinningComponent;
