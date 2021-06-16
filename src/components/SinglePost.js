import React from 'react'
import { connect } from 'react-redux'
import { getPost } from '../selectors/PostSelector'

function SinglePost(props) {
    return (
        <div>
            <h1>single post page</h1>
            <div>Id:{props.post.id}</div>
            <div>Titile:{props.post.title}</div>
        </div>
    )
}


const makeStateToProps = () =>{
    const getPostDetails = getPost();
    return (state,props) => {
        return {
            post:getPostDetails(state,props)
        }
    }
}


// const mapStateToProps = (state,props) =>{
//     // console.log("triggered")
//     return {
//         post:getPost(state,props)
//     }
// }


export default connect(makeStateToProps)(SinglePost)