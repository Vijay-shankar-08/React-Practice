import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './actions/index'

function App1() {
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>counter {counter}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>

            {isLogged ? <h1>not valid</h1> : ""}
        </div>

    )
}

export default App1;