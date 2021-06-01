import React, { useEffect, useState, useRef } from 'react'

function Hook() {
    const [state1, setState1] = useState('')
    console.log("render")

    useEffect(() => {
        console.log('onmount')

        // componentDidMount() {
        //     console.log("The component has mounted successfully!");
        //     this.setState({
        //       loaded: true
        //     })
        //   }

        return () => {
            console.log("return from state change")
        }
        // componentWillUnmount() {
        //     console.log("Component unmounted!");
        //   }
    }, [state1])
    // componentDidUpdate(prevProps) {
    //     if (this.props.name !== prevProps.name) {
    //       console.log("Name has changed!");
    //     }
    //   }
    return (
        <>
            <div>
                <button onClick={() => setState1('post')}>post</button>
                <button onClick={() => setState1('comment')}>comment</button>
                <button onClick={() => setState1('user')}>user</button>
            </div>
            <h1>{state1}</h1>

        </>
    )

}

export default Hook