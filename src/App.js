import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    document.getElementById("result").textContent = this.state.value;
    document.getElementById("name").value = "";
  }
   
  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My first project using React JS</h2>
        </div>
        <p className="App-intro">
        <label>
          Name:
          <input type="text" id="name" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        </p>
        <div id="resultForm">
          <p><span id="welcome">Welcome <span id="result"></span></span></p>
        </div>
      </div>
      </form>
    );
  }
}

export default App;
