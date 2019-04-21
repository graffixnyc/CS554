import React, { Component } from "react";

import "./App.css";
import Navigation from "./components/Navigation";
import CounterContainer from "./components/CounterContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <Navigation />
          </div>

          <Route path="/counter" component={CounterContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
