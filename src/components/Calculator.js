import React, { Component } from 'react'

class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstnum: '',
            secondnum: '',
            operation: 'Add',
            result: ''

        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    doMath = (e) => {
        e.preventDefault();
        const firstnum = this.state.firstnum
        const secondnum = this.state.secondnum
        const operation = this.state.operation
        console.log(operation)
        console.log(firstnum)
        console.log(secondnum)
        // const obj = { id: Date.now(),firstnum, secondnum, operation };
        switch (operation) {
            case 'Add':
                this.setState({
                    result: (Number(firstnum) + Number(secondnum))
                })
                break;
            case 'Sub':
                this.setState({
                    result: (firstnum) - (secondnum)
                })
                break;
            case 'Mul':
                this.setState({
                    result: firstnum * secondnum
                })
                break;
            case 'Div':
                this.setState({
                    result: firstnum / secondnum
                })
                break;
            default:
                this.setState({
                    result: ''
                })
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.doMath}>
                    Enter num:
                <input onChange={this.handleChange} type='number' name='firstnum' value={this.state.firstnum} /> <br />
                Enter num:
                <input onChange={this.handleChange} type='number' name='secondnum' value={this.state.secondnum} /><br />
                    <select value={this.state.operation} name='operation' onChange={this.handleChange}  >
                        <option value="Add">Add</option>
                        <option value="Sub">Sub</option>
                        <option value="Mul">Mul</option>
                        <option value="Div">Div</option>
                    </select>
                    <input type="submit" value="Submit" />
                </form>
                <p>
                    {console.log(this.state.result)}
                    Result : {this.state.result}
                </p>
            </div>
        )
    }
}

export default Calculator
