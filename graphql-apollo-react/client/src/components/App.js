import React, { Component } from "react";
import { NavLink, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Employees from "./Employees";
import Employers from "./Employers";

class App extends Component {
    render() {
        return (
            <Router>
                <header className="App-header">
                    <h1 className="App-title">GraphQL With Apollo</h1>
                    <nav>
                        <NavLink className="navlink" to="/">
                            Home
                        </NavLink>
                        <NavLink className="navlink" to="/employees">
                            Employees
                        </NavLink>

                        <NavLink className="navlink" to="/employers">
                            Employers
                        </NavLink>
                    </nav>
                </header>
                <Route exact path="/" component={Home} />
                <Route path="/employees/" component={Employees} />
                <Route path="/employers/" component={Employers} />
            </Router>
        );
    }
}

export default App;
