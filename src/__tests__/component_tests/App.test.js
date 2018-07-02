import React from 'react';
import {shallow} from 'enzyme';
import App from './../../components/App';
import sinon from 'sinon';

import * as fetchUtils from '../../utils/fetchData';
import {dummyResponse} from '../../utils/mockData/response';

let app;


describe('App', () => {


  beforeEach(() => {
    app = shallow(<App/>);

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
  });

  describe('Updating state successfully', () => {

    describe('handleChange', () => {

      it('updates the state correctly depending on the event.target', () => {
        app.instance().state.params.buttonClicked = true;
        app.instance().handleChange(handleChangeEvent);
        expect(app.instance().state.params.cheeseMoney).toEqual('20');
      });
    });

    describe('buttonClickedFalse', () => {

      it('updates the buttonClicked state to false', () => {
        app.instance().buttonClickedFalse();
        expect(app.instance().state.params.buttonClicked).toBe(false);
      });
    })
  });

  describe('areParamsValid', () => {

    it('should return false if cheeseMoney is false', () => {
      expect(app.instance().areParamsValid()).toEqual(false);
    });

    it('should return true if cheeseMoney has a value', () => {
      app.instance().state.params.cheeseMoney = '30';
      expect(app.instance().areParamsValid()).toEqual(true);
    })
  });



});
