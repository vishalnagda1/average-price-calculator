import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicUI from './Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Average Share Price Calculator</h2>
        </div>
        <p className="App-intro">
          Calculate the average price of shares before actual investment.
        </p>
        <BasicUI />
      </div>
    );
  }
}

export default App;
