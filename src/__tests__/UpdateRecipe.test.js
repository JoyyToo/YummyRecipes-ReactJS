import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import UpdateRecipe from '../Components/Recipes/UpdateRecipe'

describe('UpdateRecipe  component', () => {
    const params = {
        match: {
            params: {
                id:1
            }
        }
    }
    const wrapper = shallow(<UpdateRecipe  match={{params}}/>);
    it('renders properly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
      });
  
    it('renders 1 <UpdateRecipe/> component', () =>{
        const component = shallow(<UpdateRecipe match={{params}}/>);
        expect(component).toHaveLength(1);
    });
  
    it('it returns props correctly', () =>{
        const component = shallow(<UpdateRecipe name="app" match={{params}}/>);
        expect(component.instance().props.name).toBe('app')
    });

    it('contains MuiThemeProvider', () => {
        expect(wrapper.find('MuiThemeProvider')).toHaveLength(1);
    });

    it('contains divs', () => {
        expect(wrapper.find('div')).toHaveLength(3);
    });

    it('contains Paper', () => {
        expect(wrapper.find('Paper')).toHaveLength(1);
    });

    it('contains p', () => {
        expect(wrapper.find('p')).toHaveLength(2);
    });

    it('contains TextField ', () => {
        expect(wrapper.find('TextField')).toHaveLength(4);
    });

    it('contains button', () => {
        expect(wrapper.find('button')).toHaveLength(2);
    });

    it('contains Link', () => {
        expect(wrapper.find('Link')).toHaveLength(1);
    });

    it('has initial state', () => {
        expect(wrapper.state().name).toEqual('');
        expect(wrapper.state().time).toEqual('');
        expect(wrapper.state().ingredients).toEqual('');
        expect(wrapper.state().procedure).toEqual('');
    });

    it('changes state', () => {
        wrapper.setState({ name: 'apple pie', time: '1 hour', ingredients: 'flour, pie', procedure:'bake' });
        expect(wrapper.find('[name="name"]').props().value).toEqual('apple pie');
        expect(wrapper.find('[name="time"]').props().value).toEqual('1 hour');
        expect(wrapper.find('[name="ingredients"]').props().value).toEqual('flour, pie');
        expect(wrapper.find('[name="procedure"]').props().value).toEqual('bake');
    });

    it('has the correct form fields', () => {
        expect(wrapper.find('[name="name"]')).toHaveLength(1);
        expect(wrapper.find('[name="time"]')).toHaveLength(1);
        expect(wrapper.find('[name="ingredients"]')).toHaveLength(1);
        expect(wrapper.find('[name="procedure"]')).toHaveLength(1);
    });

})