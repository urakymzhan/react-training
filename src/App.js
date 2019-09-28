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
    var str = event.target.value;
    var reg = new RegExp('^[0-9]+$'); // regex to check if input string contains only numbers
    if (!reg.test(str)) {    
      this.setState({ errorMessage: "Numbers Only"});  
    } 
    // TODO: make sure to clear TEXT when i am only deleting an element in input field delete 
    // right now it outputs Numbers Only when i try to clear input
    this.setState({
      maxValue: parseInt(str),
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
    let errorMessage = this.state.errorMessagee;
    let inputText = this.state.inputText; 
    this.setState({counter: 0,  errorMessage, inputText});
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
