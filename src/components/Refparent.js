import React, { Component } from 'react'
import Refchild from './Refchild'

class Refparent extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    // componentDidMount(){
    //     this.inputRef.current.focus();
    // }
    clickHandle = () => {
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                {/* <input type='text' ref={this.inputRef}/> */}
                <Refchild ref={this.inputRef} />
                <button onClick={this.clickHandle}>Focus</button>
            </div>
        )
    }
}

export default Refparent
