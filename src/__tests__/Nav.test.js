import React from 'react';
<<<<<<< HEAD
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
=======
import { shallow, mount } from 'enzyme';
import toJson, { shallowToJson } from 'enzyme-to-json';
>>>>>>> [Feature 155119223]:

import Nav from '../Components/Nav'

describe('Nav component', () => {
    const wrapper = shallow(<Nav />);
  
    it('renders properly', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

<<<<<<< HEAD
    it('renders 1 <Nav/> component', () =>{
        const component = shallow(<Nav />);
        expect(component).toHaveLength(1);
    });

    it('it returns props correctly', () =>{
        const component = shallow(<Nav name="app"/>);
        expect(component.instance().props.name).toBe('app')
    });

    it('contains div', () => {
        expect(wrapper.find('div')).toHaveLength(1);
    });

    it('contains h2', () => {
        expect(wrapper.find('h2')).toHaveLength(1);
    });

    it('contains Link', () => {
        expect(wrapper.find('Link')).toHaveLength(1);
=======
    it('renders component in div', () => {
        expect(wrapper.find('div')).toHaveLength(1);
    });

    it('renders component in a', () => {
        expect(wrapper.find('a')).toHaveLength(1);
    });

    it('renders component in h2', () => {
        expect(wrapper.find('h2')).toHaveLength(1);
>>>>>>> [Feature 155119223]:
    });

})