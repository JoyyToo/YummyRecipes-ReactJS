import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Nav from '../Components/Nav';

describe('Nav component', () => {
  const wrapper = shallow(<Nav />);

  it('renders properly', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('renders 1 <Nav/> component', () => {
    const component = shallow(<Nav />);
    expect(component).toHaveLength(1);
  });

  it('it returns props correctly', () => {
    const component = shallow(<Nav name="app" />);
    expect(component.instance().props.name).toBe('app');
  });

  it('contains div', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('contains h2', () => {
    expect(wrapper.find('h2')).toHaveLength(1);
  });

  it('contains Link', () => {
    expect(wrapper.find('Link')).toHaveLength(1);
  });
});
