import React, { Component } from 'react'
import Childfrag from './Childfrag'


class Frag extends Component {
    render() {
        return (

            <table>
                <tbody>
                    <tr>
                       <Childfrag />
                    </tr>
                </tbody>
            </table>

        )
    }
}

export default Frag
