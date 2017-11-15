import React from 'react';
import expect from 'expect';
import { shallow, configure  } from 'enzyme';
import raf from 'utils/tempPolyfills';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Desc from './Desc.js';

export const tests = describe('Desc', () => {
  it('Should have default prop with no description message', () => {
    const output = shallow(<Desc />);

    expect(output.text()).toContain('Author provided no description.');
  });

  it('Should display description if it is provided', () => {
    const shortText = 'This is simple description';

    const output = shallow(
      <Desc text={shortText} />
    );

    expect(output.text()).toContain(shortText);
  });

  it('Should wrap the text if it is longer then 150 symbols', () => {
    const longString = '123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890this is going to be replace by ...';

    const output = shallow(
      <Desc text={longString} />
    );

    expect(output.text()).toContain('567890...');
  });
});

