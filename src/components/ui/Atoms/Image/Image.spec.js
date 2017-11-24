import React from 'react';
import expect from 'expect';
import { shallow, configure  } from 'enzyme';
import 'utils/tempPolyfills';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Image from './Image.jsx';

export const imageSpecs = describe('Image', () => {
  it('Should have image element by default', () => {
    const output = shallow(<Image />);

    expect(output.find('img').exists()).toBe(true);
  });

  it('Should have image with site logo if no src provided', () => {
    const output = shallow(<Image />);

    expect(output.find('img').prop('src')).toBe('dancy-logo-big.png');
  });

  it('Should have image with `Dancy Logo` alt text if none provided', () => {
    const output = shallow(<Image />);

    expect(output.find('img').prop('alt')).toBe('Dancy Logo');
  });

  it('Should apply image details if they are provided', () => {
    const output = shallow(<Image src='shapeOfYou.jpg' alt='Super Dance' />);

    expect(output.find('img').prop('src')).toBe('shapeOfYou.jpg');
    expect(output.find('img').prop('alt')).toBe('Super Dance');
  });
});

