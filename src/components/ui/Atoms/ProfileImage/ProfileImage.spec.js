import React from 'react';
import expect from 'expect';
import { shallow, configure  } from 'enzyme';
import 'utils/tempPolyfills';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import ProfileImage from './ProfileImage.js';

export const profileImageSpecs = describe('ProfileImage', () => {
  it('Should have img element by default', () => {
    const output = shallow(<ProfileImage />);

    expect(output.find('img').exists()).toBe(true);
  });

  it('Should have image with default logo if no src value provided', () => {
    const output = shallow(<ProfileImage />);

    expect(output.find('img').prop('src')).toBe('user_profile.png');
  });

  it('Should have image with teachers name alt text if none provided', () => {
    const output = shallow(<ProfileImage />);

    expect(output.find('img').prop('alt')).toBe('Teachers Name');
  });

  it('Should apply image details if they are provided', () => {
    const output = shallow(
      <ProfileImage src='mattStef.jpg' alt='Matt Stefanina' />
    );

    expect(output.find('img').prop('src')).toBe('mattStef.jpg');
    expect(output.find('img').prop('alt')).toBe('Matt Stefanina');
  });
});
