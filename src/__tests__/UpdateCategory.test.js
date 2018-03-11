import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import UpdateCategories from '../Components/Categories/UpdateCategory'

describe('UpdateCategories component', () => {
    const params = {
        match: {
            params: {
                id:1
            }
        }
    }
    const wrapper = shallow(<UpdateCategories match={{params}}/>);
    const preventDefault = jest.fn();
  
    it('renders properly', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('it renders UpdateCategories correctly', () =>{
        expect(wrapper.instance().getCategory( {preventDefault} ))
        expect(wrapper.instance().handleEditCategory( {preventDefault} ))
    });

})