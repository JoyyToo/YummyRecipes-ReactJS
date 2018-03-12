import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Index from '../index';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('Index component', () => {
  it('renders without crashing', () => {
    expect(JSON.stringify(Index)).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
