import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Timer from './components/Timer';
import State from './components/State';
import Derived from './components/Derived';
import Test1 from "./components/Test1"
import Test2 from './components/Test2';
import Parent from './components/Parent'
import Condition from './components/Condition';
import BtnPresent from './components/BtnPresent'
import Frag from './components/Frag'
import List from './components/List'
import ParentMark from './components/ParentMark'
import Click from './components/Click'
import Head from './components/Head'
import FRparent from './components/FRparent'
import Profile from './components/Profile' 
import Dashboard from './components/Dasboard'
import Home from './components/Home'
import Refparent from './components/Refparent'
import Mytask from './components/Mytask'
import Todo from './components/Todo'
import Calculator from './components/Calculator';
import NextCalculator from './components/NextCalculator'
import Hook from './components/Hooks'
import ComponentA from './components/ComponentA'
import Hook1 from './components/Hook1'
import {useSelector} from 'react-redux'

// const Profile = lazy(() => import('./components/Profile'))
// const Dashboard = lazy(() => import('./components/Dasboard'))
class App extends Component {
  render() {
    return (
      // <Suspense fallback={<h2>loading....</h2>}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route path='/dashboard' component={Dashboard}></Route>
            
            <Route path='/profile'>
              <Profile />
            </Route>
          <Route path='/timer'>
              <Timer name="Timer" />
            </Route>
            <Route path='/state'>
              <State />
            </Route>
            <Route path='/derived'>
              <Derived />
            </Route>
            <Route path='/test1'>
              <Test1 />
            </Route>  
            <Route path='/test2'>
              <Test2 />
            </Route>
            <Route path='/parent'>
              <Parent />
            </Route>
            <Route path='/buttonpresent'>
              <BtnPresent />
            </Route>
            <Route path='/condition'>
              <Condition/>
            </Route>
            <Route path='/frag'>
              <Frag />
            </Route>
            <Route path='/list'>
              <List />
            </Route>
            <Route path='/parentmark'>
              <ParentMark />
            </Route>
            <Route path='/head'>
              <Head />
            </Route>
            <Route path='/refeparent'>
              <Refparent />
            </Route>
            <Route path='/frparent'>
              <FRparent />
            </Route>
            <Route path='/todo'>
              <Todo />
            </Route>
            <Route path='/mytask'>
              <Mytask />
            </Route>
            <Route path='/click'>
              <Click name='vijay' />
            </Route>
            <Route path='/calc'>
              <Calculator />
            </Route>
            <Route  path='/bigcalc'>
              <NextCalculator />
            </Route>
            <Route  path='/hook'>
              <Hook />
            </Route>
            <Route  path='/hookone'>
              <Hook1 />
            </Route>
            <Route  path='/context'>
              <ComponentA />
            </Route>
            <Route  path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      // </Suspense>

    )
  }
}

export default App;

