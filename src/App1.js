import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, handleSubmit } from './actions/index'


function App1() {
    const [email, setEmail] = useState('')
    const [EducationDetails, setDetails] = useState({
        degree: '',
        start: '',
        end: ''
    })
    const [status, setStatus] = useState(false)
    const [emailError, setEmailError] = useState('')
    const [startError, setStartError] = useState('')
    const [endError, setEndError] = useState('')
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)
    const names = useSelector(state => state.Submit)

    const callChange = (e) => {
        const { name, value } = e.target;
        setDetails({
            ...EducationDetails,
            [name]: value,
        })

    }
    const callEmailChange = (evt) => {
        evt.preventDefault()
        setEmail(evt.target.value)
    }

    const validate = () => {
        let emailError = ''
        let startError = ''
        let endError = ''

        if (!(EducationDetails.start)) {
            startError = "start year cannot be blank"
        }
        if (!((Number(EducationDetails.start)) && ((EducationDetails.start < 9999) && (EducationDetails.start > 999)))) {
            startError = 'Invalid  First year'
        }
        if (!(EducationDetails.end)) {
            endError = "end year cannot be blank"
        }
        if (!((Number(EducationDetails.end)) && ((EducationDetails.end < 9999) && (EducationDetails.end > 999)))) {
            endError = 'Invalid  last year'
        }

        if (!((email.includes('@') && (email.includes('.'))))) {
            emailError = 'Invalid Email';
        }
        if (emailError) {
            setEmailError(emailError);
            return false
        }
        if (startError) {
            setStartError(startError)
            return false
        }
        if (endError) {
            setEndError(endError)
            return false
        }
        return true
    }



    const callSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (isValid) {
            dispatch(handleSubmit([{ email, EducationDetails }]))
            console.log({ email, EducationDetails })
            setEmail('')
            setDetails({
                degree: '',
                start: '',
                end: ''
            })
            setEmailError('')
            setStartError('')
            setEndError('')
        }

    }

    const callAdd = () => {
        setStatus(true)
    }


    return (
        <div>
            <h1>counter {counter}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <form onSubmit={callSubmit}>
                enter email:<input type='text' value={email} name='email' onChange={callEmailChange} /><br />
                <div style={{ fontSize: 18, color: 'red' }}>{emailError}</div>
                <button type='button' onClick={callAdd}>AddEducation details</button><br />
                    enter degree:<input disabled={!status} type='text' value={EducationDetails.degree} name='degree' onChange={callChange} />
                    start year:<input disabled={!status} type='text' value={EducationDetails.start} name='start' onChange={callChange} />
                <div style={{ fontSize: 18, color: 'red' }}>{startError}</div>
                    end year:<input disabled={!status} type='text' value={EducationDetails.end} name='end' onChange={callChange} />
                <div style={{ fontSize: 18, color: 'red' }}>{endError}</div> <br />
                <button type='submit'>Submit</button>

            </form>
            {names.state !== undefined && names.state.length > 0 && names.state.map(data => {
                return (
                    <div key={data.email}>
                        <h1>Details</h1>
                        <div>email:{data.email}</div>
                        <div>degree:{data.EducationDetails.degree}</div>
                        <div>start year:{data.EducationDetails.start}</div>
                        <div>end year:{data.EducationDetails.end}</div>
                    </div>
                )

            })}
        </div>

    )
}
export default App1;