import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './components/Button';
import './App.css';

class App extends Component {
   state = {
      count: 0
   };

   render() {
      const { count } = this.state;
      return (
         <div className="App">
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <p>Our count is: {count}</p>
               {/* We have to pass down a handler function to each of our 
                  buttons, and we need to pass down the current value in the
                  props, which is a react anti-pattern called "prop-tunneling"
                */}
               <Button
                  type="INC"
                  currentCount={count}
                  setCount={newCount => this.setState({ count: newCount })}
               >
                  Increment
               </Button>
               <Button
                  type="DEC"
                  currentCount={count}
                  setCount={newCount => this.setState({ count: newCount })}
               >
                  Decrement
               </Button>
            </header>
         </div>
      );
   }
}

export default App;
