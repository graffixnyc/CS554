import React, { Component } from 'react';
import logo from './img/logo.svg';
import './App.css';
import ShowsContainer from './components/ShowsContainer';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
   render() {
      return (
         <Router>
            <div className="App">
               <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to the TV Maze API</h1>
                  <Link className="showlink" to="/shows">
                     Shows
                  </Link>
               </header>
               <br />
               <br />
               <div className="App-body">
                  <p>Welcome to the TV Maze API example</p>
                  <Route path="/shows/" component={ShowsContainer} />
               </div>
            </div>
         </Router>
      );
   }
}

export default App;
