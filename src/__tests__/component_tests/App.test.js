import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './../../components/App';
import styled from 'styled-components';

const app = shallow(<App/>);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('passing props', () => {

  describe('Header Component', () => {

    it('has header 1', () => {
      expect(app.find('Header').at(0).prop('title')).toMatchObject(<styled.h1>Ned Ned's Cheese Emporium</styled.h1>);
    });

    it('has header 2', () => {
      expect(app.find('Header').at(1).prop('title')).toMatchObject(<styled.h2>Today you can buy 12 blocks of cheese for £19.99 🧀🧀🧀🧀🧀🧀🧀🧀🧀🧀🧀🧀</styled.h2>);
    });
  });
});
