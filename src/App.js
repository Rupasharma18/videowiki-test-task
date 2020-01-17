import React from 'react';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import Navbar from './components/navbar';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends React.Component{
  render(){
    return(
      <div className='App'>
        <Router>
          <div className='container'>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/signup' component={Signup}></Route>
          </Switch>
          </div>
        </Router>
       
      </div>
    )
  }
}
export default App;