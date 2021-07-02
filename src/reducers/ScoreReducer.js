import { UPDATE_STATE } from '../actions/ScoreActions'

const ScoreReducer = (state,action) =>{
    switch(action.type){
        case UPDATE_STATE:
            return{
                state:action.payload
            }
            default:
                return state
    }
}


export default ScoreReducer