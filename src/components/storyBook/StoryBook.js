import React, { useState } from 'react'
import PropTypes from "prop-types"

import data from './mockData.json'
import writter from './authorList.json'

function StoryBook({book,author}){
    const[value,setValue] = useState(0)
    // const[bookList,setBookList] = useState([])

    function handleChange(evt){
        setValue(0 + Number(evt.target.value) )
        
    }
    // console.log(value)
    return(
        <div>
            <div>
            <h1>Story Page</h1>
            Select Author:
                <select name="value" aria-label='select' value={value} onChange={handleChange}>
                    {author.map((item) => {
                        return <option key={item.authorId} value={item.authorId}>{item.authorName}</option>;
                    })}
                </select> <br />
            </div>
            <div>
                <h1>BooksList</h1>
                {book.map((item) => {
                    return(
                             (item.authorId === value ) &&
                             <h3>{item.bookName}</h3>    
                    )
                    
                })}
                {console.log(value)}
            </div>
            
        </div>
        
    )
}

StoryBook.defaultProps = {
    book: data.list,
    author: writter.list

};

StoryBook.prototype = {
    book: PropTypes.array.isRequired,
    author: PropTypes.array.isRequired
}

export default StoryBook
