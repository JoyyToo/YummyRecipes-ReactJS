import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import SingleRecipe from '../Components/Recipes/SingleRecipe'

describe('SingleRecipe component', () => {
    const params = {
        match: {
            params: {
                id:1
            }
        }
    }
    const wrapper = shallow(<SingleRecipe match={{params}}/>);
    it('renders properly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
      });
  
      it('renders 1 <SingleRecipe/> component', () =>{
          const component = shallow(<SingleRecipe match={{params}}/>);
          expect(component).toHaveLength(1);
      });
  
      it('it returns props correctly', () =>{
          const component = shallow(<SingleRecipe name="app" match={{params}}/>);
          expect(component.instance().props.name).toBe('app')
      });

    it('contains MuiThemeProvider', () => {
        expect(wrapper.find('MuiThemeProvider')).toHaveLength(2);
    }); 

    it('contains divs', () => {
        expect(wrapper.find('div')).toHaveLength(4);
    });

    it('contains Card', () => {
        expect(wrapper.find('Card')).toHaveLength(1);
    });

    it('contains h2', () => {
        expect(wrapper.find('h2')).toHaveLength(1);
    });

    it('contains p', () => {
        expect(wrapper.find('p')).toHaveLength(5);
    });

    it('contains CardText', () => {
        expect(wrapper.find('CardText')).toHaveLength(1);
    });

    it('contains Link', () => {
        expect(wrapper.find('Link')).toHaveLength(1);
    });

    it('contains FlatButton', () => {
        expect(wrapper.find('FlatButton')).toHaveLength(2);
    });

})