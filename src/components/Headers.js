import React from 'react';
import Header from './Header';
import HeaderStyle from './styledComponents/Header.js'
import SubHeaderStyle from './styledComponents/subHeader.js'

const Headers = () => {
  return (
    <div>
      <HeaderStyle>
        <Header
          title={"Ned Ned's Cheese Emporium"}
        />
      </HeaderStyle>
      <SubHeaderStyle>
        <Header role={"img"} aria-label={"emoji"}
          title={"Today you can buy 12 blocks of cheese for £35 🧀🧀🧀🧀🧀🧀🧀🧀🧀🧀🧀🧀"}
        />
      </SubHeaderStyle>
    </div>
  )
};

export default Headers;