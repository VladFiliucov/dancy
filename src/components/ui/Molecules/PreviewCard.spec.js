import React from 'react';
import expect from 'expect';
import { shallow, configure } from 'enzyme';
import raf from 'utils/tempPolyfills';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { preview } from 'static/db.js';

import PreviewCard from './PreviewCard.js';

export const previewCardSpecs = describe('PreviewCard', () => {
  it('Can render if no preview passed in', () => {
    const output = shallow(<PreviewCard />);

    expect(output.find('Image').exists()).toBe(true);
    expect(output.find('Desc').exists()).toBe(true);
  });

  describe('With valid preview object passed in', () => {
    let output;

    beforeEach(() => {
      output = shallow(<PreviewCard preview={preview} />);
    });

    it('Assigns Image props correctly', () => {
      expect(output.find('Image').props().src).toBe('shapeOfYou.jpg');
    });

    it('Assigns Desc props correctly', () => {
      expect(output.find('Desc').props().text)
        .toBe('Song: SHAPE OF YOU - Ed Sheeran');
    });
  });
});
