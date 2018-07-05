import React from 'react';
import { shallow } from 'enzyme';
import ResultsHolder from './../../components/ResultsHolder';
import {rates} from '../../utils/mockData/response';

const results = shallow(<ResultsHolder />);

const props = "5";

describe('Results', () => {

  it('renders correctly', () => {
    expect(results).toMatchSnapshot();
  });

  describe('rendering components', () => {

    it('has styling', () => {
      expect(results.find('ResultsStyle'));
    });

    it('shows default statement before a search', () => {
      // const object = {'The number of blocks of cheese you can afford will appear here...'}
      // expect(results.children()).toContain('The number of blocks of cheese you can afford will appear here...');
    });

    it('shows the result of a calculation after a search', () => {

    });
  });
});