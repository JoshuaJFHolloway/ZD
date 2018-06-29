import React, { Component } from 'react';
import Header from './Header';
import HeaderStyle from './styledComponents/Header.js'
import SubHeaderStyle from './styledComponents/subHeader.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header
          title={<HeaderStyle>Ned Ned's Cheese Emporium</HeaderStyle>}
        />
        <Header role={"img"} aria-label={"emoji"}
          title={<SubHeaderStyle>Today you can buy 12 blocks of cheese for £19.99 🧀🧀🧀🧀🧀🧀🧀🧀🧀🧀🧀🧀</SubHeaderStyle>}
        />
      </div>
    );
  }
}

export default App;
