import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './../../components/App';

const app = shallow(<App/>);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('passing props', () => {

  describe('Headers Component', () => {

    it('has headers', () => {
      expect(app.find('Headers'));
    });
  });
});
