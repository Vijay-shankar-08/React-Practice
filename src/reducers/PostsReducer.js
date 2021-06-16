import { INCREMENT_COUNT } from "../actions/PostActions"

const InitialState = {
    posts:[
        { id: 1,title:'post1', isActive:true},
        { id: 2,title:'post2', isActive:true},
        { id: 3,title:'post3', isActive:false},
        { id: 4,title:'post4', isActive:false},
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