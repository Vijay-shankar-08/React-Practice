import React, { Component } from 'react'
import ComponentB from './ComponentB'
import { UserProvider} from './userContext'
class ComponentA extends Component {
    render() {
        return (
            <div>
                <UserProvider value = 'vijay'>
                   <ComponentB />
                </UserProvider>
                
            </div>
        )
    }
}

export default ComponentA
