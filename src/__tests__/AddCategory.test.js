import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson, { shallowToJson } from 'enzyme-to-json';
import sinon from 'sinon';

import AddCategory from '../Components/Categories/Addcategory'

describe('AddCategory component', () => {
    const wrapper = shallow(<AddCategory />);
  
    it('renders properly', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders 1 <AddCategory/> component', () =>{
        const component = shallow(<AddCategory/>);
        expect(component).toHaveLength(1);
    });

    it('it returns props correctly', () =>{
        const component = shallow(<AddCategory name="app"/>);
        expect(component.instance().props.name).toBe('app')
    });

    it('renders component in MuiThemeProvider', () => {
        expect(wrapper.find('MuiThemeProvider')).toHaveLength(1);
    });

    it('renders component in divs', () => {
        expect(wrapper.find('div')).toHaveLength(3);
    });

    it('renders component in Paper', () => {
        expect(wrapper.find('Paper')).toHaveLength(1);
    });

    it('renders component in p', () => {
        expect(wrapper.find('p')).toHaveLength(1);
    });

    it('renders component in TextField ', () => {
        expect(wrapper.find('TextField')).toHaveLength(2);
    });

    it('renders component in button', () => {
        expect(wrapper.find('button')).toHaveLength(2);
    });

    it('renders component in Link', () => {
        expect(wrapper.find('Link')).toHaveLength(1);
    });

    it('renders component in br', () => {
        expect(wrapper.find('br')).toHaveLength(9);
    });

    it('renders component in b', () => {
        expect(wrapper.find('b')).toHaveLength(1);
    });

    it('has initial state', () => {
        expect(wrapper.state().name).toEqual('');
        expect(wrapper.state().desc).toEqual('');
    });

    it('changes state', () => {
        wrapper.setState({ name: 'dessert', desc: 'after meals' });
        expect(wrapper.find('[name="name"]').props().value).toEqual('dessert');
        expect(wrapper.find('[name="desc"]').props().value).toEqual('after meals');
    });

    it('has the correct form fields', () => {
        expect(wrapper.find('[name="name"]')).toHaveLength(1);
        expect(wrapper.find('[name="desc"]')).toHaveLength(1);
    });

})