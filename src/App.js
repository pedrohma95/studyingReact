import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const element = <h1>Hello, world!</h1>;
    
    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }
    
    const user = {
      firstName: 'Pedro',
      lastName: 'Henrique'
    };

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My first project using React JS</h2>
        </div>
        <p className="App-intro">
          <p>Hello {formatName(user)}</p>
        </p>
      </div>
    );
  }
}

export default App;
