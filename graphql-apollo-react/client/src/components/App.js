import React from 'react';
import './App.css';
import { NavLink, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Employees from './Employees';
import Employers from './Employers';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000'
  })
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <header className="App-header">
            <h1 className="App-title">
              GraphQL With Apollo Client/Server Demo
            </h1>
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
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
