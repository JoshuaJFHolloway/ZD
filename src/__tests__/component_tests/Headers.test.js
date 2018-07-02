import React from 'react';
import { shallow } from 'enzyme';
import Headers from './../../components/Headers';
import styled from 'styled-components';

const headers = shallow(<Headers/>);

describe('Headers', () => {

  it('renders correctly', () => {
    expect(Headers).toMatchSnapshot();
  });

describe('rendering components', () => {

  describe('header Component', () => {

    it('has header 1', () => {
      expect(headers.find('Header').at(0).prop('title')).toBe("Ned Ned's Cheese Emporium");
    });

    it('has header 2', () => {
      expect(headers.find('Header').at(1).prop('title')).toBe("Today you can buy 12 blocks of cheese for £35 🧀🧀🧀🧀🧀🧀🧀🧀🧀🧀🧀🧀");
      });
    });
  });
});