import React from 'react';
import PropTypes from 'prop-types'

import './Split.css'

import mockData from './mockData.json'

function Split({data}){
    
    const len = data.length / 2
    const array1 = data.slice(0,len)
    const array2 = data.slice(len, data.length)

    return(
        <>
            {array1.map(item => {
                return(
                    <div key={item.answer.question_id}>
                        {item.question.name}<br />
                        {item.answer.name}
                    </div>
                )
            })}
            {array2.map(item => {
                return(
                    <div key={item.answer.question_id}>
                        {item.question.name}<br />
                        {item.answer.name}
                    </div>
                )
            })}   
       </>
    )
}

Split.propTypes = {
    data: PropTypes.array
}
  
Split.defaultProps = {
    data: mockData.data
}



export default Split
