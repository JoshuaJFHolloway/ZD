import React from 'react';
import {rates} from '../../utils/mockData/response';
import { cheeseBlockCalculator, currencyConverter} from '../../components/MiscellaneousFunctions';
import * as MiscellaneousFunctions from '../../components/MiscellaneousFunctions';
import sinon from 'sinon';

const props = {
  params: {
    cheeseMoney: "5",
    buttonClicked: true,
  },
  results: {rates},
};

describe('Results', () => {

  let currencyConverterStub;
  const rates = props.results.rates;

  describe('currency converter', () => {

    it('returns the division of EUR and GBP rates in the dummyResponse', () => {
      expect(currencyConverter(rates)).toEqual(rates.EUR/rates.GBP)
    });
  });

  describe('cheeseBlockCalculator', () => {
    it('returns the number of cheese blocks that can be bought with the entered amount converted into euros', () => {
      currencyConverterStub = sinon.stub(MiscellaneousFunctions, "currencyConverter");
      currencyConverterStub.returns(rates.EUR/rates.GBP);
      MiscellaneousFunctions.cheeseBlockCalculator(5, rates);
      console.log("this is the count");
      console.log(currencyConverterStub.callCount);
      //expect(currencyConverterStub.calledOnce).toBe(true);
      expect(cheeseBlockCalculator(5, rates)).toEqual((5*(rates.EUR/rates.GBP))/3.24)
    });
  });
});