import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      counter: 0,
      inputText: '',
    }
  }

  // TODO: still working on onChange function
  onChange = (event) => {
    let inputText = event.target.value;
    this.setState({inputText});
  }

  onIncrease = () => {
    if (this.state.counter === this.state.inputText){
      let counter = this.state.inputText
      this.setState({counter})}
    else {
      let counter = this.state.counter +1;
      this.setState({counter})
    }
  }

  onDecrease = () => {
    if (this.state.counter > 0){
      let counter = this.state.counter -1;
      this.setState({counter})
    } 
  }

  render() {
    console.log(this.state.counter);
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
