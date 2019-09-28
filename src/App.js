import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      counter: 0,
      maxValue: Infinity,
      errorMessage: '',
      name: ''
    }
  }
  onChange = (event) => {
    var input_str = event.target.value;
    this.setState({name: input_str,})
    // regex to check if input string contains only numbers
    var reg = new RegExp('^[0-9]+$'); 
    if (!reg.test(input_str) && input_str !== '') {    
      this.setState({ errorMessage: "Numbers Only !"});  
    }
    else {
    this.setState({
        maxValue: parseInt(input_str),
        // this needed to clear errorMessage when you clearing input 
        errorMessage: ''
        });
    }
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
    this.setState({counter: 0,  errorMessage: ' ', maxValue: 0, name: ''});
  }

  render() {
    return (
      <div className="App">
        <h2 id='s'>Counter: {this.state.counter}</h2>
        <input value={this.state.name} onChange={this.onChange} placeholder='enter number'/>  
        <button onClick={this.onIncrease}>Increase</button>
        <button onClick={this.onDecrease}>Decrease</button>
        <button onClick={this.resetCounter}>Reset</button>
        <p>{this.state.errorMessage}</p>
      </div>
      )
    }
  }

export default App;
