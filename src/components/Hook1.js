import React, {useEffect, useState,useRef} from 'react'

export default function Hook1(){
    const[name,setName] = useState('')
    const renderCount = useRef(1)
    console.log('render')


    useEffect(() =>{
        // setrenderCount(prevRenderCount => prevRenderCount + 1)
        renderCount.current = renderCount.current+1
    })

    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)}/>
            <div> name is {name} </div>
            <div>rendered {renderCount.current} times</div>
        </div>

    )
}

