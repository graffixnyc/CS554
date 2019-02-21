import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import Account from './Account'
import SignIn from './SignIn'
import Landing from './Landing'
import SignUpPage from "./SignUp"
import ForgotPassword from './ForgotPassword';
import { firebase } from '../firebase';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }
  componentDidMount(){
    firebase.auth.onAuthStateChanged(authUser => {
      if (authUser){
          this.setState({ 
            email: authUser.email, 
            uid: authUser.uid,
            name: authUser.displayName,
            lastLoginTime: authUser.metadata.lastSignInTime,
            fullAuthUser: authUser
          },()=>{
            console.log(this.state)
          })
          
      }else{
        this.setState({ 
          email: null, 
          uid: null,
          name: null,
          lastLoginTime: null,
          fullAuthUser: null 
        },()=>{
            console.log(this.state)
          });
      }
    });
  }
  
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
        <PrivateRoute  path="/home" component={Home}></PrivateRoute>
        <Route  path="/signin" component={SignIn}></Route>
        <PrivateRoute  path="/account" component={Account}></PrivateRoute>
        <Route  path="/signup" component={SignUpPage}></Route>
        <Route   path="/forgotpassword" component={ForgotPassword}></Route>

      </div>
      </Router>
    );
  }
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    firebase.isAuthenticated() === true
      ? <Component {...props} {...rest}/>
      : <Redirect to={{
          pathname: '/signin'
        }} />
  )} />
)

export default App ;
