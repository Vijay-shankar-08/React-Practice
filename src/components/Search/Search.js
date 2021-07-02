import { useState } from 'react';

function Search(){
    const [inputValue, setInputValue] = useState('');

    const handleChange = (evt) => {
        setInputValue(evt.target.value);
    };

    return(
        <input type = 'text' onChange={handleChange} title = "dummyInput"/>
    )
}

export default Search;