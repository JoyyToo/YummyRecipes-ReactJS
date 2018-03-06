import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson, { shallowToJson } from 'enzyme-to-json';

import Nav from '../Components/Nav'

describe('Nav component', () => {
    const wrapper = shallow(<Nav />);
  
    it('renders properly', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders component in div', () => {
        expect(wrapper.find('div')).toHaveLength(1);
    });

    it('renders component in a', () => {
        expect(wrapper.find('a')).toHaveLength(1);
    });

    it('renders component in h2', () => {
        expect(wrapper.find('h2')).toHaveLength(1);
    });

})