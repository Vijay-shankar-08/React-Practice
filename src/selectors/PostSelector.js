import { createSelector} from "reselect";

export const getPosts = (state) => state.posts;
export const getFilter = (state)=> state.filter;


export const getActivePosts = createSelector(
    [getPosts,getFilter],
    (posts,filter)=>{
        console.log('triggered')
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