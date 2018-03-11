import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import PrivateRoute from '../Components/Constants/PrivateRoute'

describe('PrivateRoute component', () => {
    const wrapper = shallow(<PrivateRoute />);
    const preventDefault = jest.fn();
  
    it('renders properly', () => {
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

})