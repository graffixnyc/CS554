import React, {Component} from 'react';

class CounterButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleIncrese = this.handleIncrese.bind(this);
  }
  handleIncrese() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
    /*
          ,function(){
            this.props.handleStateChange(this.state.counter);
           }
          */
  }
  componentDidMount() {
    console.log(this.props);
  }

  handleDecrease() {
    this.setState((prevState) => ({
      counter: prevState.counter - 1
    }));
    /*
          ,function(){
            this.props.handleStateChange(this.state.counter);
          }  
          */
  }
  render() {
    return (
      <div>
        <button onClick={this.handleIncrese}>Increase</button>
        <button onClick={this.handleDecrease}>Decrease</button>
        <div>{this.state.counter}</div>
      </div>
    );
  }
}

export default CounterButtons;
