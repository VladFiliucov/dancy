import React from 'react';
import expect from 'expect';
import { shallow, configure, mount } from 'enzyme';
import raf from 'utils/tempPolyfills';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { tutorials } from 'static/db.js';

import TutorialList from './TutorialList.js';

export const tutorialListSpecs = describe('TutorialList', () => {
  it('Renders something went wrong text if no tutorials', () => {
    const output = shallow(<TutorialList />);

    expect(output.text()).toContain('Something went wrong!!');
  });

  it('Renders correct number of tutorials', () => {
    const output = mount(<TutorialList tutorials={tutorials} />);

    expect(output.find('TutorialCard').length).toEqual(2);
  });
});
