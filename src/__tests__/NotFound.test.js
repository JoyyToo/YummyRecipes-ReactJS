import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import NotFound from '../Components/Constants/NotFound'

describe('NotFound component', () => {
    const wrapper = shallow(<NotFound />);
  
    it('renders properly', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('contains div', () => {
        expect(wrapper.find('div')).toHaveLength(3);
    });

    it('contains h2', () => {
        expect(wrapper.find('h2')).toHaveLength(1);
    });

    it('contains h1', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
    });

    it('contains button', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('contains Link', () => {
        expect(wrapper.find('Link')).toHaveLength(1);
    });

})