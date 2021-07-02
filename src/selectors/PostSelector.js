import { createSelector } from "reselect";

export const getPosts = (state) => state.posts;
export const getFilter = (state)=> state.filter;
export const getCount = (state)=> state.count;
export const getPostById = (state,props)=> 
    state.posts.find((post)=> post.id === props.id);

export const getPost = () =>{
    createSelector([getPostById],(post) =>{
    console.log("post by id triggerd")
    return post;
})}

// export const getPost = createSelector([getPostById],(post) =>{
//     console.log("post by id triggerd")
//     return post;
// })

export const getActivePosts = createSelector(
    [getPosts,getFilter],
    (posts,filter)=>{
        // console.log('triggered 1st one')
        switch(filter){
            case 'SHOW_ACTIVE':
                return posts.filter((post)=> post.isActive)      
            case 'SHOW_INACTIVE':
                return  posts.filter((post)=> !post.isActive)  
            default:
                return posts    
        };
    }
);