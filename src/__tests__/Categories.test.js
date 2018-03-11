import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Categories from '../Components/Categories/Category'

describe('Categories component', () => {
    const wrapper = shallow(<Categories />);
    const preventDefault = jest.fn();
  
    it('renders properly', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('renders 1 <Category/> component', () =>{
      expect(wrapper).toHaveLength(1);
      expect(wrapper.instance().handleCategory( {preventDefault} ))
      expect(wrapper.instance().handleSearch( {preventDefault} ))
      expect(wrapper.instance().button( {preventDefault} )) 
  });

})