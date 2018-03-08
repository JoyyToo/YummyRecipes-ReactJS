import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ReactDOM from 'react-dom';
jest.mock('react-dom', ()=> ({render: jest.fn()}))
import App from '../App.js'
import Index from '../index.js'


describe('Index component', () => {
  
    it('renders without crashing', () => {
        expect(JSON.stringify(Index)).toMatchSnapshot();
      });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
    });

})