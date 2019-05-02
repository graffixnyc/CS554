import CounterButtons from './CounterButtons';
import React, {Component} from 'react';

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(counter) {
    console.log('In set state in higher comonent');
    this.setState({
      counter: counter
    });
  }
  render() {
    return (
      <div>
        Counter Container
        <h1>{this.state.counter && this.state.counter}</h1>
        {/*<CounterButtons handleStateChange = {this.handleStateChange}/>*/}
        <CounterButtons />
      </div>
    );
  }
}
export default CounterContainer;
