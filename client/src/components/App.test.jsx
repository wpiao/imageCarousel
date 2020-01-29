/* eslint-env jest */
import React from 'react';
import { shallow, mount } from 'enzyme';
import axios from 'axios';
import App from './App.jsx';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it('renders', () => {
    expect(wrapper).not.toBeNull();
  });
});
