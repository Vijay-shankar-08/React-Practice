import React, { Component } from 'react'


class Cchild extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.data.name}</h1>
                <button type='button' onClick={()=>this.props.data.handleChange("childName")}>Click</button>
            </div>
        )
    }
}

export default Cchild
