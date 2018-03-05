import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson, { shallowToJson } from 'enzyme-to-json';

import Landing from '../Components/Landing';


describe('Landing component', () => {
  const wrapper = shallow(<Landing />);

  it('renders properly', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

<<<<<<< HEAD
  it('contains divs', () => {
    expect(wrapper.find('div')).toHaveLength(6);
  });

  it('contains h2', () => {
    expect(wrapper.find('h2')).toHaveLength(1);
  });

  it('contains h1', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('contains hr', () => {
    expect(wrapper.find('hr')).toHaveLength(1);
  });

  it('contains button', () => {
    expect(wrapper.find('button')).toHaveLength(2);
  });

  it('contains p', () => {
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('contains Link', () => {
    expect(wrapper.find('Link')).toHaveLength(2);
  });

=======
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

>>>>>>> [Feature 155119223]:
})