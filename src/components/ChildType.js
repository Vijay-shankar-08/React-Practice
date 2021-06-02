import React from 'react'
import PropTypes from 'prop-types';

function ChildType(props) {
    return (
        <div>
            <h1>{props.str}</h1>
            <h1>{props.strOrNum}</h1>
            <div>
                {
                    props.arr.map((val) => {
                        return (
                            <li key={val}>{val}</li>
                        )
                    })
                }
            </div>
            <div>
                {
                    props.arrObj.map((value)=>{
                        return (
                            <li key={value.age}>{value.name}</li>
                        )
                    })
                }
            </div>
            <div>
                {
                    props.Obj1.map((value)=>{
                        return (
                            <li key={Date.now()}>{value.username}</li>
                        )
                    })
                }
            </div>
        </div>
    )
}

ChildType.propTypes={
    str:PropTypes.string,
    strOrNum:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    arr: PropTypes.arrayOf(PropTypes.number),
    arrObj:PropTypes.arrayOf(PropTypes.shape({
        name:PropTypes.oneOf(['add','edit']),
        age:PropTypes.number
    })),
    Obj1:PropTypes.objectOf(PropTypes.shape({
        username:PropTypes.string,
        posts:PropTypes.number,
        likes:PropTypes.number
    }))
}






export default ChildType