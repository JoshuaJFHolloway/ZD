import React from 'react';
import {shallow} from 'enzyme';
import App from './../../components/App';
import sinon from 'sinon';

import * as MiscellaneousFunctions from '../../components/MiscellaneousFunctions';
import * as fetchUtils from '../../utils/fetchData';
import {rates} from '../../utils/mockData/response';

let app;

const handleChangeEvent = {
  target: {
    name: 'cheeseMoney',
    value: '20'
  }
};

const response = {
  rates: rates
};

describe('App', () => {

  let fetchStub;
  let onSuccessStub;
  let onFailureStub;
  let areParamsValidStub;
  let cheeseBlockCalculatorStub;

  beforeAll(() => {
    fetchStub = sinon.stub(fetchUtils, "fetchData");
  });

  beforeEach(() => {
    app = shallow(<App/>);

    onSuccessStub = sinon.stub(app.instance(), "onSuccess");
    onFailureStub = sinon.stub(app.instance(), "onFailure");
  });

  afterEach(() => {
    fetchStub.reset();
  });

  afterAll(() => {
    fetchStub.restore();
  });

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  describe('rendering components', () => {

      it('has headers', () => {
        expect(app.find('Headers'));
      });

      it('has InputsHolder', () => {
        expect(app.find('InputsHolder'));
      });

      it('has ResultsHolder', () => {
        expect(app.find('ResultsHolder'));
      });

      it('has two flag components', () => {
        expect(app.find('Flag').at(0).prop('name')).toBe("Japan");
        expect(app.find('Flag').at(1).prop('name')).toBe("GB");
      })
  });

  describe('Initializes state', () => {

    it("initializes cheeseMoney state as '' ", () => {
      expect(app.state('cheeseMoney')).toEqual('');
    });

    it('initializes amountOfCheese state as 0', () => {
      expect(app.state('amountOfCheese')).toEqual(0);
    });

    it('initializes rates state as undefined', () => {
      expect(app.state('rates')).toEqual(undefined);
    });

    it('initializes GB state as false', () => {
      expect(app.state('GB')).toEqual(false);
    });

    it('initializes Japan state as false', () => {
      expect(app.state('Japan')).toEqual(false);
    });
  });

  describe('Updating state successfully', () => {

    describe('handleChange', () => {

      it('updates the state correctly depending on the event.target', () => {
        app.instance().handleChange(handleChangeEvent);
        expect(app.instance().state.cheeseMoney).toEqual('20');
      });

      it('updates the state of GB to true if clicked', () => {
        app.instance().toggleGB();
        expect(app.instance().state.GB).toEqual(true)
      });

      it('updates the state of Japan to true if clicked', () => {
        app.instance().toggleJapan();
        expect(app.instance().state.Japan).toEqual(true)
      });
    });
  });

  describe('areParamsValid', () => {

    it('should return false if cheeseMoney has no length', () => {
      app.instance().state.cheeseMoney = '';
      expect(app.instance().areParamsValid()).toEqual(false);
    });

    it('should return true if cheeseMoney has a value', () => {
      app.instance().state.cheeseMoney = '30';
      expect(app.instance().areParamsValid()).toEqual(true);
    })
  });

  describe('Getting data', () => {
    it('should call the fetch stub once', () => {
      areParamsValidStub = sinon.stub(app.instance(), "areParamsValid");
      areParamsValidStub.returns(true);
      app.instance().getData();
      expect(fetchStub.calledOnce).toBe(true);
    });
  });

  describe('onSuccess', () => {
    it('should update the state with the rates and amount of cheese', () => {
      cheeseBlockCalculatorStub = sinon.stub(MiscellaneousFunctions, 'cheeseBlockCalculator');
      cheeseBlockCalculatorStub.returns(10);
      app.instance().onSuccess(response);
      expect(cheeseBlockCalculatorStub.calledOnce).toBe(true);
      expect(app.instance().state.amountOfCheese).toEqual(10);
    })
  });

});
