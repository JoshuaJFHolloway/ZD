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
  })

});
