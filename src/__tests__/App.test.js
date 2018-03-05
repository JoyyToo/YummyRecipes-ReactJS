import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { shallow} from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
=======
import { shallow, mount } from 'enzyme';
import toJson, { shallowToJson } from 'enzyme-to-json';
>>>>>>> [Feature 155119223]:

import App from '../App';

describe('App component', () => {
    const wrapper = shallow(<App />);
  
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('renders properly', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
      });

    it('has the the expected components', () => {
        expect(wrapper.find('BrowserRouter')).toHaveLength(1);
        expect(wrapper.find('div').length).toBe(1);
    });

    it('renders the routes', () => {
<<<<<<< HEAD
        expect(wrapper.find('Route').length).toEqual(13);
=======
        expect(wrapper.find('Route').length).toEqual(12);
>>>>>>> [Feature 155119223]:
    });

    it('renders the switch', () => {
        expect(wrapper.find('Switch')).toHaveLength(1);
    });

})