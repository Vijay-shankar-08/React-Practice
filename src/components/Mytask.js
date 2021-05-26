import React, { Component } from 'react'

class Mytask extends Component {
    constructor(props){
        super(props)
        this.state = {
            fname: '',
            lname: '',
            email: '',
            names: []
        }
    }
    handleChange = (evt)=> {
        const value = evt.target.value
        this.setState({
            [evt.target.name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let value = this.state.fname
        let value1 = this.state.lname
        let value2 =this.state.email
        const obj = { id: Date.now(), value, value1,value2 };
        this.setState({
            names: [obj, ...this.state.names],
            fname: '',
            lname: '',
            email: '',

        });
        event.preventDefault();
    }
    renderTable() {
        return (
            this.state.names.map((name) => {
                const { id, value, value1,value2 } = name; //destructuring
                return (
                    <tr key={id}>
                        <td>{value}</td>
                        <td> {value1}</td>
                        <td>{value2}</td>
                    </tr>
                );
            })
        );
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        FirstName :
                        <input type = 'text' onChange={this.handleChange} name = 'fname' value ={this.state.fname} /><br />
                        LastName :
                        <input type = 'text' onChange={this.handleChange} name = 'lname' value= {this.state.lname} /><br />
                        E-Mail :
                        <input type = 'text' onChange={this.handleChange} name = 'email' value= {this.state.email} /><br />
                    </label>
                    <input type="submit"  value="Submit" />
                </form>

                <br />
                <table>
                    <tbody>
                        <tr>
                            <th>FirstNames</th>
                            <th>LastName</th>
                            <th>E-Mail</th>
                        </tr>
                        {/* Render dynamic rows*/}
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Mytask
