import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      counter: 0,
      inputText: '',
      maxValue: Infinity,
      errorMessage: ''
    }
  }
  onChange = (event) => {
    if (!event.isInteger) {
      this.setState({ errorMessage: "Numbers Only"}); 
    }
    this.setState({
      maxValue: parseInt(event.target.value)
    });
  }

  onIncrease = () => {
    if (this.state.counter < this.state.maxValue) {
      let counter = this.state.counter +1;
      this.setState({counter})
    }
  };

  onDecrease = () => {
    if (this.state.counter > 0){
      let counter = this.state.counter -1;
      this.setState({counter})
    } 
  }

  resetCounter = (event) => {
    this.setState({counter: 0, errorMessage: '', inputText: ''});
  }

  render() {
    return (
      <div className="App">
        <h2 id='s'>Counter: {this.state.counter}</h2>
        <input placeholder="Enter number" onChange={this.onChange}/>  
        <button onClick={this.onIncrease}>Increase</button>
        <button onClick={this.onDecrease}>Decrease</button>
        <button onClick={this.resetCounter}>Reset</button>
        <p>{this.state.errorMessage}</p>
      </div>
      )
    }
  }

export default App;
