import React,{ useState } from 'react';


function Dynamic() {
  const [inputFields, setInputFields] = useState([
    {  firstName: '', lastName: '' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleAddFields = ()=> {
      setInputFields([...inputFields,{firstName: '', lastName:''}])
  }

  const handleChangeInput = (index,event) => {
   const values = [...inputFields]
   values[index][event.target.name]= event.target.value
   setInputFields(values)
}

  return (
      <div>
        <h1>Add New Member</h1>
        <form  onSubmit={handleSubmit}>
        {inputFields.map((inputField,index) => (
          <React.Fragment key={index}>
            <input type='text' name="firstName" value={inputField.firstName} onChange={(event)=>handleChangeInput(event,index)}/>
            <input type='text' name="lastName" value={inputField.lastName} onChange={(event)=>handleChangeInput(event,index)}/>
            <button type='button' onClick={() => handleAddFields()}>Add</button>
         </React.Fragment>
        )) }
        <button type='submit'>Submit</button>
      </form>
      </div>
      
  )
}

export default Dynamic;