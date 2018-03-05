import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson, { shallowToJson } from 'enzyme-to-json';

import Landing from '../Components/Landing';


describe('Landing component', () => {
  const wrapper = shallow(<Landing />);

  it('renders properly', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('renders component in divs', () => {
    expect(wrapper.find('div')).toHaveLength(6);
  });

  it('renders component in h2', () => {
    expect(wrapper.find('h2')).toHaveLength(1);
  });

  it('renders component in h1', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('renders component in hr', () => {
    expect(wrapper.find('hr')).toHaveLength(1);
  });

  it('renders component in button', () => {
    expect(wrapper.find('button')).toHaveLength(2);
  });

  it('renders component in p', () => {
    expect(wrapper.find('p')).toHaveLength(1);
  });

})