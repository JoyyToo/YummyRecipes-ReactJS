import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import PrivateRoute from '../Components/Constants/PrivateRoute';

describe('PrivateRoute component', () => {
  const wrapper = shallow(<PrivateRoute />);

  it('renders properly', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
