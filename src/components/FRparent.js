import React, { useEffect , useRef } from 'react'
import FRchild from './FRchild'

function FRparent(){

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const submitRef = useRef(null);

    useEffect(() => {
        firstNameRef.current.focus();
    }, []);

    function firstKeyDown(e) {
        if(e.key === "Enter") {
        lastNameRef.current.focus();
        }
    }
    function lastKeyDown(e) {
        if(e.key === "Enter") {
            submitRef.current.focus();
        }
    }
    function submitKeyDown(e){
        if(e.key === "Enter"){
            alert("form submitted")
        }
    }

     return (
            <div>
                <FRchild type='text' onKeyDown={firstKeyDown} ref={firstNameRef} placeholder='enter firstname' />
                <FRchild type='text' onKeyDown={lastKeyDown} ref={lastNameRef} placeholder='enter lastname' />
                <button onKeyDown ={submitKeyDown} ref={submitRef}>submit</button>
            </div>
        )
}



export default FRparent
