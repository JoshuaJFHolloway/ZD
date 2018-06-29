import React, { Component } from 'react';
import Headers from './Headers';
import Inputs from './Inputs';
import Results from './Results';

class App extends Component {
  render() {
    return (
      <div>
        <Headers/>
        <Inputs/>
        <Results/>
      </div>
    );
  }
}

export default App;
