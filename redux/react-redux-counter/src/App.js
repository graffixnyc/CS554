import React, { Component } from 'react';
import logo from './logo.svg';

// We use connect from react-redux to "connect" our components to our store
import { connect } from 'react-redux';

import Button from './components/Button';
import './App.css';

class App extends Component {
   render() {
      const { count } = this.props;
      return (
         <div className="App">
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <p>Our count is: {count}</p>
               <Button type="INC">Increment</Button>
               <Button type="DEC">Decrement</Button>
            </header>
         </div>
      );
   }
}

// We choose what part our our state will be added to our component's props
const mapStateToProps = state => ({
   count: state.count
});

const ConnectedApp = connect(
   mapStateToProps,
   /* If we wanted to dispatch redux actions in this component, we would put  
   that function here, but we don't need it so we use null */
   null
)(App);

export default ConnectedApp;
