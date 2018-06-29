import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ned Ned's Cheese Emporium</h1>
        </header>
        <span role={"img"} aria-label={"emoji"} >Today you can buy 12 blocks of cheese for £19.99 🧀🧀🧀🧀🧀🧀🧀🧀🧀🧀🧀🧀</span>
      </div>
    );
  }
}

export default App;
