import React, { Component } from 'react';

function App() {

  return (
    <>
      <Counter></Counter>
    </>
  );
}

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handlePlusButton = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleMinusButton = () => {
    this.setState({
      count: this.state.count -1
    })
  }

  render() {
    return (
      <>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+</button>
        <button onClick={this.handleMinusButton}>-</button>
      </>
    )
  }
}

export default App;
