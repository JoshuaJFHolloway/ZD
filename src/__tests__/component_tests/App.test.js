import React from 'react';
import {shallow} from 'enzyme';
import App from './../../components/App';

const app = shallow(<App/>);

describe('App', () => {

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  describe('passing props', () => {

    describe('Headers Component', () => {

      it('has headers', () => {
        expect(app.find('Headers'));
      });
    });
  });
});
