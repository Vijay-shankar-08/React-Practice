import React from 'react'
import { useSelector } from 'react-redux'
import { getPost } from '../selectors/PostSelector'

function PostTwoChild(props) {
    const post = useSelector(state => getPost(state,props))
    return (
        <div>
            <center>
                <h1>Post two child</h1>
                <div>Id:{post.id}</div>
            <div>Titile:{post.title}</div>
            </center>
            
        </div>
    )
}


// const makeStateToProps = () =>{
//     const getPostDetails = getPost();
//     return (state,props) => {
//         return {
//             post:getPostDetails(state,props)
//         }
//     }
// }

export default PostTwoChild