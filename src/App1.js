import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, handleSubmit } from './actions/index'
// import { findEmployee } from "./actions/userAction"

function App1() {
    const [email,setEmail] = useState('')
    const[degree,setDegree] = useState('')
    const[start,setStart] = useState('')
    const[end,setEnd] = useState('')
    const[details,setDetails] = useState([])
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)
    const names = useSelector(state => state.Submit)
    
    const callChange = (evt) =>{
        setEmail(evt.target.value)
    }
    const callDegree = (evt) =>{
        setDegree(evt.target.value)
    }
    const callStart = (evt) =>{
        setStart(evt.target.value)
    }
    const callEnd = (evt) =>{
        setEnd(evt.target.value)
    }

    const callSubmit = (evt) =>{
        evt.preventDefault()
        setDetails([{email,degree}])
        dispatch(handleSubmit([{email,degree,start,end}]))
    }

    // console.log(details)

  

    return (
        <div>
            <h1>counter {counter}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button> 
            <form onSubmit={callSubmit}>
                    enter email:<input type='text' value={email} onChange={callChange} />
                    enter degree:<input type='text' value={degree} onChange={callDegree} />
                    start year:<input type='text' value={start} onChange={callStart} />
                    end year:<input type='text' value={end} onChange={callEnd} />
                <input type='submit' value='Submit' />
            </form>
            {console.log(names)}
            {names.state !== undefined && names.state.length>0 && names.state.map(data =>{
                return(
                    <div key = {Date.now()}>

                        <h1>Details</h1>
                        <div>email:{data.email}</div>
                        <div>degree:{data.degree}</div>
                        <div>startyear:{data.start}</div>
                        <div>endyear:{data.end}</div>
                    </div>
                )
                
            })}
        </div>

    )
}

export default App1;