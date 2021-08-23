import React from 'react'
import  { useForm }  from 'react-hook-form'

function TestForm({ onSubmit = async (data) =>  console.log((data)) }){
  const { register, handleSubmit } = useForm()
  // const [one, setOne] = useState('')

  return(
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input aria-label='userName'  placeholder='enter name' {...register('email')} />
      <input type='submit' aria-label='submit' />
      </form> 
      <input type='checkbox' value='yes' {...register('select')}   />
    </div>
  )
}

export default TestForm