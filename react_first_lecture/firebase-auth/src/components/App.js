import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import Account from './Account'
import SignIn from './SignIn'
import Landing from './Landing'
import SignUpPage from "./SignUp"
import ForgotPassword from './ForgotPassword';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Navigation />
      </div>
        <Route exact path="/" component={Landing}></Route>
        <Route  path="/home" component={Home}></Route>
        <Route  path="/signin" component={SignIn}></Route>
        <Route  path="/account" component={Account}></Route>
        <Route  path="/signup" component={SignUpPage}></Route>
        <Route  path="/forgotpassword" component={ForgotPassword}></Route>

      </div>
      </Router>
    );
  }
}

export default App;
