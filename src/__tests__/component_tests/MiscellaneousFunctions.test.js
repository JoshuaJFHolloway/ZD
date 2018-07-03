import React from 'react';
import {rates} from '../../utils/mockData/response';
import { cheeseBlockCalculator, currencyConverter} from '../../components/MiscellaneousFunctions';

const props = {
  params: {
    cheeseMoney: "5",
    buttonClicked: true,
  },
  results: {rates},
};

describe('Results', () => {

  describe('currency converter', () => {

    it('returns the division of EUR and GBP rates in the dummyResponse', () => {
      console.log("this is props");
      console.log(props);
      expect(currencyConverter(props)).toEqual(0.85459/0.757215)
    });
  });

  describe('cheeseBlockCalculator', () => {
    it('etc', () => {
    });
  });
});
