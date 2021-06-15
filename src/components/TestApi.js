import React, { Component } from 'react'

class TestApi extends Component {
    constructor(props){
        super(props)
        this.state={
            apiResponse:[]
        }
    };

    callApi(){
        fetch('http://localhost:8008/testing')
        .then(res => res.text())
        .then(res => this.setState({apiResponse: res}))
    }

    componentDidMount(){
        this.callApi()
    }
    render() {
        return (
            <div>
                <p>
                    Message from api:
                   {this.state.apiResponse}
                </p>
            </div>
        )
    }
}

export default TestApi
