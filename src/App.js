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
import Task3 from './components/Task3'

const Profile = lazy(() => import('./components/Profile'))
const Dashboard = lazy(() => import('./components/Dasboard'))
class App extends Component {
  render() {
    return (
      // <Suspense fallback={<h2>loading....</h2>}>

      // <Router>
      //   <div>
      //     <ul>
      //       <li>
      //         <Link to='/'>Home</Link>
      //       </li>
      //       <li>
      //         <Link to='/profile'>Profile</Link>
      //       </li>
      //     </ul>
      //     <hr />
      //     <Route path='/profile'>
      //       <Profile />
      //     </Route>
      //   <Switch>
      //     <Route  exact path='/'>
      //       <Home />
      //     </Route>

      //     <Route path='/dashboard'>
      //       <Dashboard />
      //     </Route>

      //   </Switch>
      //   </div>
      // </Router>
      //  </Suspense>
      <div>
        <Timer name="Timer" />
        <State />
        <Derived />
        <Test1 />
        <Test2 />
        <Parent />
        <BtnPresent />
        <Condition />
        <Frag />
        <List />
        <ParentMark />
        <Click name="vijay" />
        <Head />
        <Refparent />
        <FRparent />
        <Task3 />
      </div>
    )
  }
}

export default App;

