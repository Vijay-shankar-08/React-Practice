import React, { Component } from 'react'

class Mytask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: '',
            lname: '',
            email: '',
            names: []
        }
    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    emailCheck = (value) => {
        let exist = true
        this.state.names.forEach((name) => {
            // console.log(name,value)
            if (name.Email === value) {
                exist = false
                // console.log(count)
            }
        })
        return exist
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const Firstname = this.state.fname
        const Lastname = this.state.lname
        const Email = this.state.email
        const obj = { id: Date.now(), Firstname, Lastname, Email };
        if (this.emailCheck(Email)) {
            // console.log(this.emailCheck(value2))
            this.setState({
                names: [obj, ...this.state.names],
                fname: '',
                lname: '',
                email: '',

            });
        } else {
            alert("email already exist")
        }

    }
    renderTable() {
        return (
            this.state.names.map((name) => {
                const { id, Firstname, Lastname, Email } = name; //destructuring
                return (
                    <tr key={id}>
                        <td>{Firstname}</td>
                        <td> {Lastname}</td>
                        <td>{Email}</td>
                    </tr>
                );
            })
        );
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} aria-label='table-submit'>
                    <label>
                        FirstName :
                        <input type='text' onChange={this.handleChange} name='fname' aria-label='first-name' value={this.state.fname} /><br />
                        LastName :
                        <input type='text' onChange={this.handleChange} name='lname' aria-label='last-name' value={this.state.lname} /><br />
                        E-Mail :
                        <input type='text' onChange={this.handleChange} name='email' aria-label='email' value={this.state.email} /><br />
                    </label>
                    <button type="submit" name="submit" value="Submit">submit</button>
                </form>

                <br />
                <table aria-label='table' >
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
