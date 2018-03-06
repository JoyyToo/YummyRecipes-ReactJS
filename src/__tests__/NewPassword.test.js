import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import sinon from 'sinon';

import NewPassword from '../Components/Auth/NewPassword'

describe('NewPassword component', () => {
    const wrapper = shallow(<NewPassword />);
  
    it('renders properly', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders 1 <AddCategory/> component', () =>{
        const component = shallow(<NewPassword/>);
        expect(component).toHaveLength(1);
    });

    it('contains MuiThemeProvider', () => {
        expect(wrapper.find('MuiThemeProvider')).toHaveLength(1);
    });

    it('contains divs', () => {
        expect(wrapper.find('div')).toHaveLength(2);
    });

    it('contains Paper', () => {
        expect(wrapper.find('Paper')).toHaveLength(1);
    });

    it('contains TextField ', () => {
        expect(wrapper.find('TextField')).toHaveLength(1);
    });

    it('contains button', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('contains br', () => {
        expect(wrapper.find('br')).toHaveLength(2);
    });

    it('has initial state', () => {
        expect(wrapper.state().newpassword).toEqual('');
    });

    it('renders component in MuiThemeProvider', () => {
        expect(wrapper.find('MuiThemeProvider')).toHaveLength(1);
    });

    it('renders component in divs', () => {
        expect(wrapper.find('div')).toHaveLength(2);
    });

    it('renders component in Paper', () => {
        expect(wrapper.find('Paper')).toHaveLength(1);
    });

    it('renders component in TextField ', () => {
        expect(wrapper.find('TextField')).toHaveLength(1);
    });

    it('renders component in button', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('renders component in br', () => {
        expect(wrapper.find('br')).toHaveLength(2);
    });

    it('has initial state', () => {
        expect(wrapper.state().newpassword).toEqual('');
    });


    it('has the correct form fields', () => {
        expect(wrapper.find('[name="token"]')).toHaveLength(1);
        expect(wrapper.find('[name="newpassword"]')).toHaveLength(1);
    });

})