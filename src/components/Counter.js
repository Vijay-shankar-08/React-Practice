import React,{ useState, useMemo } from 'react';

// function Counter() {
//     const [counterOne, setCounterOne] = useState(0)
//     const [counterTwo, setCounterTwo] = useState(0)

//     const incrementOne = () => {
//         setCounterOne(counterOne + 1)
//     }

//     const incrementTwo = () => {
//         setCounterTwo(counterTwo + 1)
//     }
//     const isEven = useMemo(() => {
//         let i = 0
//         while( i < 20000000000) i++
//         return counterOne % 2 === 0
//     },[counterOne])

//     return (
//         <div>
//              <button onClick={incrementOne}>countOne - {counterOne}</button>
//              <span>{isEven ? 'Even' : 'Odd'}</span>

//              <button onClick={incrementTwo}>countTwo - {counterTwo}</button>
//         </div>
//     )
// }


// export default Counter

export default function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
        
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while( i < 200000000) i++
        return counterOne % 2 === 0
    },[counterOne])
    
    return (
        <div>
            <div>
                <button onClick={incrementOne}>countOne - {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>countTwo - {counterTwo}</button>
            </div>
        </div>
    )
}