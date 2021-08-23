import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
// import store from './redux/store'
import store from './store'
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
import Todo from './components/Todo/Todo.js'
import Calculator from './components/Calculator';
import NextCalculator from './components/NextCalculator'
import Hook from './components/Hooks'
import ComponentA from './components/ComponentA'
import Hook1 from './components/Hook1'
import Types from './components/Types'
import Form from './components/Form'
import Dynamic from './components/Dynamic'
import TestApi from './components/TestApi'
import DynamicField from './components/DynamicField';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import ItemContainer from './components/ItemContainer'
import Post from './components/Post'
import PostTwo from './components/PostTwo'
import Badminton from './components/Badminton/Badminton'
import Cparent from './components/Cparent'
import Mparent from './components/Mparent'
import Button from './components/Button/Button'
import Split from './components/Split'
import Counter from './components/Counter'
import Display from './components/Display';
import Fun from './components/Fun';
import MemoDisplay from './components/MemoDispaly'
import StoryBook from './components/storyBook/StoryBook'
import ActivityComponentNext from './components/Activity/ActivityComponentNext';
import MyCounter from './components/MyCounter/index';
import MyForm from './components/MyForm/index';
import Sample from './components/sampleTwo';
import TestForm from './components/Testing/index'

// const Profile = lazy(() => import('./components/Profile'))
// const Dashboard = lazy(() => import('./components/Dasboard'))
class App extends Component {
  render() {
    return (
      // <Suspense fallback={<h2>loading....</h2>}>
      <Router>
        <Provider store = {store}>
        <div>
          {/* <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          </ul>
          <hr /> */}
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
            <Route path='/testform'>
              <TestForm />
            </Route>
            <Route path='/sample'>
              <Sample />
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
            <Route  path='/types'>
              <Types />
            </Route>
            <Route  path='/myCounter'>
              <MyCounter />
            </Route>
            <Route  path='/myform'>
              <MyForm />
            </Route>
            <Route  path='/forms'>
              <Form />
            </Route>
            <Route  path='/dynamic'>
              <Dynamic />
            </Route>
            <Route  path='/testapi'>
              <TestApi />
            </Route>
            <Route  path='/dynamicfield'>
              <DynamicField />
              
            </Route>
           
            <Route  path='/cakeandice'>
              <ItemContainer iceCream />
              <CakeContainer />
              <IceCreamContainer />
            </Route>
            {/* <Route  path='/icecream'>
              <IceCreamContainer />
            </Route> */}
            <Route  path='/badminton'>
              <Badminton />
            </Route>
            <Route  path='/post'>
              <Post />
            </Route>
            <Route  exact path='/posttwo'>
              <PostTwo />
            </Route>
            <Route  path='/Cparent'>
              <Cparent />
            </Route>
            <Route  path='/Mparent'>
              <Mparent />
            </Route>
            <Route  path='/test'>
              <Button />
            </Route>
            <Route  path='/split'>
              <Split />
            </Route>
            <Route  path='/usecallback'>
              <Display/>
            </Route>
            <Route  path='/fun'>
              <Fun />
            </Route>
            <Route  path='/usehook'>
              <MemoDisplay />
            </Route>
            <Route  path='/usecm'>
              <Counter />
            </Route>
            <Route  path='/story'>
              <StoryBook />
            </Route>
            <Route  path='/activity'>
              <ActivityComponentNext />
            </Route>
            <Route  path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
        </Provider>
      </Router>
    )
  }
}

export default App;

