import React, { Component } from "react";

class Task3 extends Component {
    state = {
        names: [],
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let value = document.getElementById("namevalue").value;
        let value1 = document.getElementById("lastnamevalue").value;
        const obj = { id: Date.now(), value, value1 };
        console.log(obj.id);
        this.setState({
            names: [obj, ...this.state.names],
        });
        document.getElementById("myform").reset();


        return;
    };

    renderTable() {
        return (
            this.state.names.map((name, index) => {
                const { id, value, value1 } = name; //destructuring
                return (
                    <tr key={id}>
                        <td>{value}</td>
                        <td> {value1}</td>
                    </tr>
                );
            })
        );
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} id="myform">
                    <label>
                        FirstName:
            <input type="text" name="name" id="namevalue" />
            LastName
            <input type="text" name="lastname" id="lastnamevalue" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                {/* Table */}
                <br />
                <table>
                    <tbody>
                        <tr>
                            <th>FirstNames</th>
                            <th>LastName</th>
                        </tr>
                        {/* Render dynamic rows
             */}
                        {this.renderTable()}
                    </tbody>
                </table>
            </>
        );
    }
}
export default Task3;