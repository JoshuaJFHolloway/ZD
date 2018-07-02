import React from 'react';
import { shallow } from 'enzyme';
import ResultsHolder from './../../components/ResultsHolder';
import {dummyResponse} from '../../utils/mockData/response';

const results = shallow(<ResultsHolder />);

const props = {
  params: {
    cheeseMoney: "5",
    buttonClicked: true,
  },
  results: {dummyResponse},
};

describe('Results', () => {

  it('renders correctly', () => {
    expect(results).toMatchSnapshot();
  });

  describe('rendering components', () => {

    it('has Header', () => {
      expect(results.find('ResultsStyle'));
    });

    it('shows default statement before a search', () => {

    });

    it('still shows the default statement if a search has been performed with incorrect params', () => {

    });

    it('shows the result of a calculation after a search', () => {

    });
  });

  describe('currency converter', () => {

    it('etc', () => {
    });
  });

  describe('cheeseBlockCalculator', () => {
    it('etc', () => {
    });
  });
});