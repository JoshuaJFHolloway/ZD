import React from 'react';
import { shallow } from 'enzyme';
import Headers from './../../components/Headers';
import styled from 'styled-components';

const headers = shallow(<Headers/>);

describe('Headers', () => {

  it('renders correctly', () => {
    expect(Headers).toMatchSnapshot();
  });

describe('passing props', () => {

  describe('header Component', () => {

    it('has header 1', () => {
      expect(app.find('Header').at(0).prop('title')).toMatchObject(<styled.h1>Ned Ned's Cheese Emporium</styled.h1>);
    });

    it('has header 2', () => {
      expect(app.find('Header').at(1).prop('title')).toMatchObject(<styled.h2>Today you can buy 12 blocks of cheese for £19.99 🧀🧀🧀🧀🧀🧀🧀🧀🧀🧀🧀🧀</styled.h2>);
      });
    });
  });
});