import React from 'react';
import expect from 'expect';
import { shallow, configure } from 'enzyme';
import 'utils/tempPolyfills';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Navbar from './Navbar.js';

export const navbarSpecs = describe('Navbar', () => {
  it('Should have default title', () => {
    const output = shallow(<Navbar />);

    expect(output.text()).toContain('Dancy');
  });
});

