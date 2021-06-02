import React, { Component } from 'react'
import ChildType from './ChildType'

class Types extends Component {
    render() {
        return (
            <div>
                <ChildType
                    str={'vijay'}
                    strOrNum={"123"}
                    arr={[1,2,3,4]}
                    arrObj={[{name:"vijay", age:23}, {name:"vj", age:21}]}
                    Obj1={{username:'Vijay', posts:34,likes:23}}
                />
            </div>
        )
    }
}

export default Types
