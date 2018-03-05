import React from 'react';
import { shallow, mount } from 'enzyme';
<<<<<<< HEAD
import { shallowToJson } from 'enzyme-to-json';
import sinon from 'sinon'
=======
import toJson, { shallowToJson } from 'enzyme-to-json';
>>>>>>> [Feature 155119223]:

import Register from '../Components/Auth/Register'

describe('Register component', () => {
    const wrapper = shallow(<Register />);
<<<<<<< HEAD
    const preventDefault = jest.fn();
=======
>>>>>>> [Feature 155119223]:
  
    it('renders properly', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders 1 <Register/> component', () =>{
        const component = shallow(<Register/>);
        expect(component).toHaveLength(1);
    });

    it('it returns props correctly', () =>{
<<<<<<< HEAD
        const component = shallow(<Register name="app" />);
        expect(component.instance().props.name).toBe('app')
        expect(component.instance().handleRegister( {preventDefault} ))    
=======
        const component = shallow(<Register name="app"/>);
        expect(component.instance().props.name).toBe('app')
>>>>>>> [Feature 155119223]:
    });

    it('has initial state', () => {
        expect(wrapper.state().username).toEqual('');
        expect(wrapper.state().email).toEqual('');
        expect(wrapper.state().password).toEqual('');
    });

    it('changes state', () => {
        wrapper.setState({ username: 'user', email: 'user@mail.com', password: 'password' });
        expect(wrapper.find('[name="username"]').props().value).toEqual('user');
        expect(wrapper.find('[name="email"]').props().value).toEqual('user@mail.com');
        expect(wrapper.find('[name="password"]').props().value).toEqual('password');
    });

    it('has the correct form fields', () => {
        expect(wrapper.find('[name="username"]')).toHaveLength(1);
        expect(wrapper.find('[name="email"]')).toHaveLength(1);
        expect(wrapper.find('[name="password"]')).toHaveLength(1);
    });

<<<<<<< HEAD
    it('contains MuiThemeProvider', () => {
        expect(wrapper.find('MuiThemeProvider')).toHaveLength(1);
    });

    it('contains divs', () => {
        expect(wrapper.find('div')).toHaveLength(4);
    });

    it('contains Link', () => {
        expect(wrapper.find('Link')).toHaveLength(4);
    });

    it('contains li', () => {
        expect(wrapper.find('li')).toHaveLength(2);
    });

    it('contains Paper', () => {
        expect(wrapper.find('Paper')).toHaveLength(1);
    });

    it('contains p', () => {
        expect(wrapper.find('p')).toHaveLength(2);
    });

    it('contains i', () => {
        expect(wrapper.find('i')).toHaveLength(3);
    });

    it('contains TextField ', () => {
        expect(wrapper.find('TextField')).toHaveLength(3);
    });

    it('contains button', () => {
        expect(wrapper.find('button')).toHaveLength(2);
    }); 
=======
    it('renders component in MuiThemeProvider', () => {
        expect(wrapper.find('MuiThemeProvider')).toHaveLength(1);
    });

    it('renders component in divs', () => {
        expect(wrapper.find('div')).toHaveLength(4);
    });

    it('renders component in Link', () => {
        expect(wrapper.find('Link')).toHaveLength(4);
    });

    it('renders component in li', () => {
        expect(wrapper.find('li')).toHaveLength(2);
    });

    it('renders component in Paper', () => {
        expect(wrapper.find('Paper')).toHaveLength(1);
    });

    it('renders component in p', () => {
        expect(wrapper.find('p')).toHaveLength(2);
    });

    it('renders component in i', () => {
        expect(wrapper.find('i')).toHaveLength(3);
    });

    it('renders component in TextField ', () => {
        expect(wrapper.find('TextField')).toHaveLength(3);
    });

    it('renders component in button', () => {
        expect(wrapper.find('button')).toHaveLength(2);
    });
>>>>>>> [Feature 155119223]:

})
