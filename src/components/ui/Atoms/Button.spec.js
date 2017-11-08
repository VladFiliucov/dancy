import raf from 'utils/tempPolyfills';
import React from 'react';
import expect from 'expect';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { Button } from './Button.js';

export const testik = describe('Button', () => {
  it('Should have Submit text', () => {
    const output = shallow(<Button />);

    expect(output.text()).toContain('Submit');
  });
});

