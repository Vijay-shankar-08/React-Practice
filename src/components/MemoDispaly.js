import React, {useState, useCallback, useMemo} from 'react';
import Count from './UseCount';
import Button from './UseButton';
import Title from './Title';

function MemoDisplay() {
    const [age, setAge] = useState(20)
    const [salary, setSalary] = useState(10000)
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    },[age])

    const incrementSalary = useCallback(()=>{
        setSalary(salary + 1000)
    },[salary])

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
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
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


export default MemoDisplay