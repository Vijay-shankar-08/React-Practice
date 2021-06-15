
// function App1() {
//     const [email, setEmail] = useState('')
//     const [educationDetails, setEducationDetails] = useState([
//         {
//             degree: '',
//             start: '',
//             end: '',
//         },
//     ])
//     // // const [status, setStatus] = useState(false)
//     const [emailError, setEmailError] = useState('')
//     // const [startError, setStartError] = useState('')
//     // const [endError, setEndError] = useState('')
//     const [err, setErr] = useState({})
//     const [fill, setFill] = useState('')
    // const dispatch = useDispatch();
//     // const counter = useSelector(state => state.counter)
//     // const names = useSelector(state => state.Submit)

//     const callChange = (index, event) => {

//         const values = [...educationDetails]
//         values[index][event.target.name] = event.target.value
//         setEducationDetails(values)
//     }
//     const callEmailChange = (evt) => {
//         evt.preventDefault()
//         setEmail(evt.target.value)
//     }
//     const handleAddFields = () => {
//         const isFill = Filled(educationDetails)
//         if (isFill) {
//             setEducationDetails([...educationDetails, { degree: '', start: '', end: '' }])
//             setFill('')
//         }

//     }

//     const Filled = (educationDetails) => {
//         let fillErr = ''
//         educationDetails.forEach(details => {
//             if ((details.degree === '') || (details.start === '') || (details.end === '')) {
//                 fillErr = 'should fill all 3 fileds'
//             }
//         })
//         if (fillErr) {
//             setFill(fillErr)
//             return false
//         }
//         return true
//     }

//     const validate = (email, educationDetails) => {
//         let emailError = ''
//         const regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})(.[a-z]{2,10})$/;
//         // let startError = ''
//         // let endError = ''
//         if (!(regx.test(email))) {
//             emailError = 'Invalid Email';
//             setEmailError(emailError);
//             return false
//         }

//         educationDetails.forEach((details, index) => {
//             if(details.degree === ''){
//                 setErr({
//                     degreeError: "degree field cannot be blank",
//                     key: index
//                 })
//                 return 
//             }
//             if ((details.start) === '') {
//                 setErr({
//                     startError: "start year cannot be blank",
//                     key: index
//                 })
//                 return 

//             }
//             if (!((Number(details.start)) && (Number(details.start < 9999) && (Number(details.start > 999))))) {
//                 setErr({
//                     startError: "Start Year is Invalid",
//                     key: index
//                 })
//                 return 
//             }
//             if ((details.end) === '') {
//                 setErr({
//                     endError: "end year cannot be blank",
//                     key: index
//                 })
//                 return 

//             }
//             if (!((Number(details.end)) && (Number(details.end < 9999) && (Number(details.end > 999))))) {
//                 setErr({
//                     endError: 'Invalid  last year',
//                     key: index
//                 })
//                 return 

//             }
//         if(err){
//             return false
//         }

//         })
        

//         return true
//     }


//     console.log(err)

//     const callSubmit = (e) => {
//         e.preventDefault()
//         const isValid = validate(email, educationDetails)
//         if (isValid) {
//             // dispatch(handleSubmit([{ email, EducationDetails }]))
//             console.log({ email, educationDetails })
//             setEmail('')
//             setEducationDetails([{
//                 degree: '',
//                 start: '',
//                 end: ''
//             }])
//             setEmailError('')
//             setErr({})
//             setFill('')
//         }

//     }

//     // const callAdd = () => {
//     //     setStatus(true)
//     // }


//     return (
//         <div>
//             {/* <h1>counter {counter}</h1>
//             <button onClick={() => dispatch(increment())}>+</button>
//             <button onClick={() => dispatch(decrement())}>-</button> */}
//             <form onSubmit={callSubmit}>
//                 enter email:<input type='text' value={email} name='email' onChange={callEmailChange} /><br />
//                 <div style={{ fontSize: 18, color: 'red' }}>{emailError}</div>
//                 <button type='button' onClick={handleAddFields}>AddEducation Details</button><br />
//                 {educationDetails.map((items, index) => (
//                     <div key={index}>
//                         enter degree:<input type='text' name='degree' value={items.degree} onChange={(event) => callChange(index, event)} /><br />
//                         <div>{index === err.key ? <div style={{ fontSize: 18, color: 'red' }}>{err.degreeError}</div> : null} </div>
//                         start year:<input type='text' name='start' value={items.start} onChange={(event) => callChange(index, event)} />
//                         <div>{index === err.key ? <div style={{ fontSize: 18, color: 'red' }}>{err.startError}</div> : null} </div>

//                         end year:<input type='text' name='end' value={items.end} onChange={(event) => callChange(index, event)} />
//                         <div>{index === err.key ? <div style={{ fontSize: 18, color: 'red' }}>{err.endError}</div> : null} </div> <br />

//                     </div>
//                 ))}
//                 <div style={{ fontSize: 18, color: 'red' }}>{fill}</div>
//                 <button type='submit'>Submit</button>

//             </form>
//             {/* {names.state !== undefined && names.state.length > 0 && names.state.map(data => {
//                 return (
//                     <div key={data.email}>
//                         <h1>Details</h1>
//                         <div>email:{data.email}</div>
//                         <div>degree:{data.EducationDetails.degree}</div>
//                         <div>start year:{data.EducationDetails.start}</div>
//                         <div>end year:{data.EducationDetails.end}</div>
//                     </div>
//                 )

//             })} */}
//             {/* {console.log(email,EducationDetails)} */}
//         </div>

//     )
// }
