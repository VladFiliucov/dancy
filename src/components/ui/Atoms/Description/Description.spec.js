import React from 'react';
import expect from 'expect';
import { shallow, configure  } from 'enzyme';
import raf from 'utils/tempPolyfills';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Description from './Description.js';

export const descriptionSpecs = describe('Description', () => {
  it('Displays default text if no text provided', () => {
    const output = shallow(<Description />);

    expect(output.text()).toContain('No description provided');
  });

  it('Displays text provided via props', () => {
    const descText = 'This text will be displayed within Description';
    const output = shallow(<Description text={descText} />);

    expect(output.text()).toContain(descText);
  });
});
