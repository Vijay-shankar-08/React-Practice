import React, { Component } from 'react'


const Button = (props) => (
    <button onClick={() => props.onClick()}>
        {props.text} {console.log(props)}
    </button>
)

class BtnPresent extends Component {
    onClick() {
        console.log("clicked")
    }
    render() {
        return (
            <div>
                <Button onClick={this.onClick} text="click here" >
                    <p>hello <span>vijay</span></p>
                </Button>
            </div>
        )
    }
}

export default BtnPresent
