import React from 'react';
import { shallow } from 'enzyme';
import InputsHolder from './../../components/InputsHolder';

const inputsHolder = shallow(<InputsHolder />);

describe('InputsHolder', () => {

  it('renders correctly', () => {
    expect(inputsHolder).toMatchSnapshot();
  });

  describe('rendering components', () => {

    it('has Header', () => {
      expect(inputsHolder.find('Header'));
    });

    it('has InputStyle', () => {
      expect(inputsHolder.find('InputStyle'));
    });

    it('has ButtonStyle', () => {
      expect(inputsHolder.find('ResultStyle'));
    });
  });
});