import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      name: '',
      isLoggedIn: false
    }
  }

  onSubmit = () => {
    const newState = { isLoggedIn: true };
    this.setState(newState);
  }

  logOut = () => {
    const newState = { isLoggedIn: false };
    this.setState(newState);
  }

  render() {
    const loggedIn = <Header isLoggedIn={this.state.isLoggedIn} name={this.state.name}/>;
    const guest = ( <div>
        <h1>Please Sign in.</h1>
        <input />
        <button onClick={this.onSubmit}>Sign In</button>
      </div> );

    const logOut = <button onClick={this.logOut}>Log Out</button>;

    return (
      <div className="App">
        { this.state.isLoggedIn ? loggedIn : guest }
        { this.state.isLoggedIn ? logOut : null }
        <Footer />
      </div>
    )
  }
}

export default App;
