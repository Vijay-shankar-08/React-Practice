import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App1 from './App1';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux'
import allReducers from './reducers/index'
import {Provider} from 'react-redux'
// import ReduxThunk from 'redux-thunk'
// const  middleware = [ReduxThunk]

const myStore = createStore(
  allReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render(

  <Provider store = {myStore}>
  <React.StrictMode>
    <App1 />
    {/* <App /> */}
  </React.StrictMode>
   </Provider>,  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
