import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-localstorage-mock';
import {notify} from 'react-notify-toast';

configure({ adapter: new Adapter() });

notify.show = jest.fn();
