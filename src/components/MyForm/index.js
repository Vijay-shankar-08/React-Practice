import React, { useState } from 'react'
import  { useForm }  from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
import PropTypes from 'prop-types'

function MyForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const [marked, setMarked] = useState('')
    
    const handleChange = (e) => {
        setMarked(e.target.value)
    }

    const genderValues = ['Male', 'Female']

    const onSubmit = async (data) =>  console.log((data))

    const options = ['select degree','B.E', 'B.Sc']
   

    return(
        <form aria-label='my-form' onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='Enter Email' type='text' name='email'
            {...register('email',
            { required:'email is required',
            pattern: { value:/^([a-zA-Z0-9.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})(.[a-z]{2,10})$/, message:'invalid email' }})} />
            <ErrorMessage errors={errors} name='email'>
                {({ messages }) =>
                    messages && Object.entries(messages).map(([type, message]) => (
                        <p key={type}>{message}</p>
                    ))
                }
            </ErrorMessage>
            <br />

             <input placeholder='Enter Name' type='text' name='name'
            { ...register('name',
            { 
                required:'name is required', 
                maxLength: { value:20, message:'name is invalid'}, 
                pattern: { value:/^[a-zA-Z ]*$/, message:'name is invalid'} 
            })}
            />
            <ErrorMessage errors={errors} name='name'>
                {({ messages }) =>
                    messages && Object.entries(messages).map(([type, message]) => (
                        <p key={type}>{message}</p>
                    ))
                }
            </ErrorMessage>
            <br/>

             <input placeholder='Enter Age' type='text' name='age'
             {...register("age", 
             { 
                min: {value:20, message:'invalid age'}, 
                max: { value:99, message:'invalid age'}, 
                required: 'age is required', 
                pattern: { value:/^[0-9]*$/, message:'invalid age'} 
             })} 
             />
             <ErrorMessage errors={errors} name='age'>
                {({ messages }) =>
                    messages && Object.entries(messages).map(([type, message]) => (
                        <p key={type}>{message}</p>
                    ))
                }
            </ErrorMessage>
            <br/>

             Gender:
            {genderValues.map((item) => 
                <label key={item}>
                    <input
                        type='radio'
                        value={item}
                        name='gender'
                        aria-label={item}
                        {...register('gender',{ required: 'must select gender'})}
                    />
                {item}
                </label> 
            )}
            <ErrorMessage errors={errors} name='gender' />
            <br/> 

            Select Degree:
            <select aria-label='degree' name='degree' {...register('degree', 
            { 
                required:'must select degree', 
                pattern: { value:/^[a-zA-Z.]*$/, message:'must select degree'}, 
                maxLength:{value:4, message:'must select degree' } 
            })}>
                {options.map((value) => (
                    <option
                    key={value}
                    value={value}
                    >
                    {value}
                 </option>
                ))}
            </select>
            <ErrorMessage errors={errors} name='degree'>
                {({ messages }) =>
                    messages && Object.entries(messages).map(([type, message]) => (
                        <p key={type}>{message}</p>
                    ))
                }
            </ErrorMessage>
            <br/> 

            Description:
            <textarea type='text' placeholder='Description' name='description'
            { ...register('description', 
            { 
                required:'description is required'
            })} 
            />

            <ErrorMessage errors={errors} name='description' />
            <br/>

            Degree Completed:
            <input name='select' aria-label='yes' type='checkbox'  value='Yes' checked={marked === 'Yes'} onClick={handleChange}
            { ...register('degreeCompleted', 
            { required:'must select anyone option' } 
            )}
            />Yes
            <input name='select' aria-label='no' type='checkbox' value='No' checked={marked === 'No'} onClick={handleChange}
            { ...register('degreeCompleted', 
            { required:'must select anyone option' } )}
            />No

            <ErrorMessage errors={errors} name='select' />
            <br/>

            <button type='submit' aria-label='submit'>submit</button>

            <input type="reset" onClick={() => reset()} aria-label='reset' />
        </form>
    )
}


MyForm.propTypes = {
    onSubmit:PropTypes.func
}


export default MyForm