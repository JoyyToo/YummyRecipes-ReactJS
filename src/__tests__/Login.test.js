import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Login from '../Components/Auth/Login'

describe('Login component', () => {
    const wrapper = shallow(<Login />);
  
    it('renders properly', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders 1 <Login/> component', () =>{
        const component = shallow(<Login/>);
        expect(component).toHaveLength(1);
    });

    it('it returns props correctly', () =>{
        const component = shallow(<Login name="app"/>);
        expect(component.instance().props.name).toBe('app')
    });

    it('has initial state', () => {
        expect(wrapper.state().email).toEqual('');
        expect(wrapper.state().password).toEqual('');
    });

    it('has the correct form fields', () => {
        expect(wrapper.find('[name="email"]')).toHaveLength(2);
        expect(wrapper.find('[name="password"]')).toHaveLength(1);
    });

    it('contains divs', () => {
        expect(wrapper.find('div')).toHaveLength(5);
    });

    it('contains li', () => {
        expect(wrapper.find('li')).toHaveLength(2);
    });

    it('contains p', () => {
        expect(wrapper.find('p')).toHaveLength(2);
    });

    it('contains br', () => {
        expect(wrapper.find('br')).toHaveLength(8);
    });

    it('contains in MuiThemeProvider', () => {
        expect(wrapper.find('MuiThemeProvider')).toHaveLength(1);
    });

    it('contains Link', () => {
        expect(wrapper.find('Link')).toHaveLength(4);
    });

    it('contains Paper', () => {
        expect(wrapper.find('Paper')).toHaveLength(1);
    });

    it('contains i', () => {
        expect(wrapper.find('i')).toHaveLength(2);
    });

    it('contains TextField ', () => {
        expect(wrapper.find('TextField')).toHaveLength(3);
    });

    it('contains button', () => {
        expect(wrapper.find('button')).toHaveLength(3);
    });

    it('has initial state', () => {
        expect(wrapper.state().email).toEqual('');
        expect(wrapper.state().password).toEqual('');
    });

    it('has the correct form fields', () => {
        expect(wrapper.find('[name="email"]')).toHaveLength(2);
        expect(wrapper.find('[name="password"]')).toHaveLength(1);
    });
    
})