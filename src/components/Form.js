import React from 'react'
import {useFormik } from 'formik'
import * as yup from 'yup'


// const validate = values => {
//     let errors={}
//     if(!values.name) {
//         errors.name = 'Name is Required'
//     }else if(values.name.length >20){
//         errors.name = "max 20 character only"
//     }else if(values.name.length <3){
//         errors.name = "min 3 character only"
//     }

//     return errors
// }

const Form = ()=> {
     const formik = useFormik({
         initialValues:{
             name:'',
             email:''
        },
        validationSchema:yup.object({
            name:yup.string()
            .required('Name is required')
            .min(5,'5 characters required')
            .max(20,'maximun 20 character required'),
            email:yup.string()
            .email()
            .required('email is required')
        }),
        onSubmit:(userInput) => {
          console.log(userInput);
      }
    })

    return (
        <div>
            <form onSubmit = {formik.handleSubmit}>
                <label>Name</label>
                <input type='text' name='name' onChange={formik.handleChange} value={formik.values.name} />
                {formik.errors.name ? 
                 <div>{formik.errors.name}</div> : null}
                
                <label>Email</label>
                <input type='text' name='email' onChange={formik.handleChange} value={formik.values.email} />
                {formik.errors.email ? 
                 <div>{formik.errors.email}</div> : null}

                <button type='Submit'>Submit</button>
            </form>
           
        </div>
    )
}


export default Form