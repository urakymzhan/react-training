import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      counter: 0,
      inputText: '',
      maxValue: Infinity,
    }
  }
  onChange = (event) => {
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

  render() {
    return (
      <div className="App">
        <h2 id='s'>Counter: {this.state.counter}</h2>
        <input onChange= {this.onChange}/>
        <button onClick={this.onIncrease}>Increase</button>
        <button onClick={this.onDecrease}>Decrease</button>
      </div>
      )
    }
  }

export default App;
