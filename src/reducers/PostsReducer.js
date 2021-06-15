import { INCREMENT_COUNT } from "../actions/PostActions"

const InitialState = {
    posts:[
        {title:'post1', isActive:true},
        {title:'post2', isActive:true},
        {title:'post3', isActive:false},
        {title:'post4', isActive:false},
    ],
    filter: 'SHOW_ACTIVE',
    count: 0,
}

const PostsReducer = (state=InitialState,action)=>{
    switch(action.type){
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state
    }

}

export default PostsReducer