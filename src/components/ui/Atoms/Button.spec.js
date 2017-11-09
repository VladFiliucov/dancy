import React from 'react';
import expect from 'expect';
import { shallow, configure  } from 'enzyme';
import raf from 'utils/tempPolyfills';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { Button } from './Button.js';

export const tests = describe('Button', () => {
  it('Should have Submit text if no `text` prop was provided', () => {
    const output = shallow(<Button />);

    expect(output.text()).toContain('Submit');
  });

  it('Should have `disabled` attribute', () => {
    const output = shallow(
      <Button disabled={true} />
    );

    expect(output.find('button').prop('disabled')).toBe(true);
  });

  it('Should have `danger` className', () => {
    const output = shallow(
      <Button text='Cmon!' className='danger' />
    );

    expect(output.find('button.danger').exists()).toBe(true);
  });
});

