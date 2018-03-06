import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson, { shallowToJson } from 'enzyme-to-json';

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

    it('changes state', () => {
        wrapper.setState({ email: 'user@mail.com', password: 'password' });
        expect(wrapper.find('[name="email"]').props().value).toEqual('user@mail.com');
        expect(wrapper.find('[name="password"]').props().value).toEqual('password');
    });

    it('has the correct form fields', () => {
        expect(wrapper.find('[name="email"]')).toHaveLength(1);
        expect(wrapper.find('[name="password"]')).toHaveLength(1);
    });

    it('renders component in divs', () => {
        expect(wrapper.find('div')).toHaveLength(4);
    });

    it('renders component in li', () => {
        expect(wrapper.find('li')).toHaveLength(2);
    });

    it('renders component in p', () => {
        expect(wrapper.find('p')).toHaveLength(2);
    });

    it('renders component in br', () => {
        expect(wrapper.find('br')).toHaveLength(8);
    });

    it('renders component in MuiThemeProvider', () => {
        expect(wrapper.find('MuiThemeProvider')).toHaveLength(1);
    });

    it('renders component in Link', () => {
        expect(wrapper.find('Link')).toHaveLength(5);
    });

    it('renders component in Paper', () => {
        expect(wrapper.find('Paper')).toHaveLength(1);
    });

    it('renders component in i', () => {
        expect(wrapper.find('i')).toHaveLength(2);
    });

    it('renders component in TextField ', () => {
        expect(wrapper.find('TextField')).toHaveLength(2);
    });

    it('renders component in button', () => {
        expect(wrapper.find('button')).toHaveLength(2);
    });

})