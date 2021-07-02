import { createStore, combineReducers  } from 'redux'
import  PostsReducer  from './reducers/PostsReducer'
// import ScoreReducer from './reducers/ScoreReducer'


const rootReducer = combineReducers({
    Posts:PostsReducer
    // Score:ScoreReducer 
  })


const store = createStore(rootReducer);

export default store