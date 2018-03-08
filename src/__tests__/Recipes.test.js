import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Recipes from '../Components/Recipes/Recipe'

describe('Recipes component', () => {
    const params = {
        match: {
            params: {
                id:1
            }
        }
    }
    const wrapper = shallow(<Recipes match={{params}}/>);
    const preventDefault = jest.fn();

    it('renders properly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('it renders handleRecipe correctly', () =>{
        expect(wrapper.instance().handleRecipe( {preventDefault} ))    
    });

    it('it renders handleInputChange correctly', () =>{
        expect(wrapper.instance().handleInputChange( {preventDefault} ))    
    });

})