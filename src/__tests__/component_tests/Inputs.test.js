import React from 'react';
import { shallow } from 'enzyme';
import Inputs from './../../components/Inputs';

const inputs = shallow(<Inputs />);

describe('Inputs', () => {

  it('renders correctly', () => {
    expect(Inputs).toMatchSnapshot();
  });

});