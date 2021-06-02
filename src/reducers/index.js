import counterReducer from './counter'
import loggedReducer from './isLogged'
import SubmitReducer from './submit'
import { combineReducers } from 'redux'


const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    Submit: SubmitReducer,
})

export default allReducers;