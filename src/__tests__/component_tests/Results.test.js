import React from 'react';
import { shallow } from 'enzyme';
import Results from './../../components/Results';

const results = shallow(<Results />);

describe('Results', () => {

  it('renders correctly', () => {
    expect(Results).toMatchSnapshot();
  });

});