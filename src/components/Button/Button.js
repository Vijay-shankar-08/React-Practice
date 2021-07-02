import { useState } from 'react';

function Button(){
    const[value,setValue] = useState("Click Me");

    const handleChange = () => {
        setValue("You Clicked")
    };

    return (
        <button onClick={handleChange} type='button' title = "dummyButton">{value}</button>
    );
}

export default Button;

