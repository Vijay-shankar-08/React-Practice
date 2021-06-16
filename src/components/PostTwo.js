
import { useState } from 'react'
import PostTwoChild from './PostTwoChild'
import { useDispatch, useSelector } from "react-redux"
import  { incrementCount }  from '../actions/PostActions'
import { getActivePosts } from "../selectors/PostSelector"

function PostTwo() {
    const posts = useSelector(state => getActivePosts(state))
    const count = useSelector(state =>state.count)
    const dispatch = useDispatch()
    const[postId,setPostId]= useState('')

    function onPostClick(id){
        setPostId(id);
    }

    return (
        <div>
            <center>
                <div>Post two page</div>
                <button onClick={()=> dispatch(incrementCount())}>Increment Count </button>
                <div> Count : {count}</div>
                <div>
                    {posts.map((post)=>{
                        return(
                            <div
                            key={post.id} onClick={()=> onPostClick(post.id)}>{post.title}
                            </div>
                        )
                        
                    })}
                </div>
            </center>
            <div>
                {postId && 
                <div>
                    <PostTwoChild  id ={postId}/> 
                    {/* <PostTwoChild  id ='2'/> */}
                </div>}
            </div>
            
        </div>
    )
}

// const getActivePosts = (posts,filter)=>{
//     console.log('triggered 1st one')
//     switch(filter){
//         case 'SHOW_ACTIVE':
//             return posts.filter((post)=> post.isActive)      
//         case 'SHOW_INACTIVE':
//             return  posts.filter((post)=> !post.isActive)  
//         default:
//             return posts    
//     };
// }

export default PostTwo