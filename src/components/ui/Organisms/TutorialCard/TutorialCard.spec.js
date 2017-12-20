import React from 'react';
import expect from 'expect';
import { shallow, configure } from 'enzyme';
import 'utils/tempPolyfills';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { tutorial } from 'static/db.js';

import TutorialCard from './TutorialCard.js';

export const tutorialCardSpecs = describe('TutorialCard', () => {
  it('Return no tutorial text if no tutorial provided', () => {
    const output = shallow(<TutorialCard />);

    expect(output.text()).toContain('This tutorial is not available');
  });

  it('Does not render cards if no tutorial passed in', () => {
    const output = shallow(<TutorialCard />);

    expect(output.find('PreviewCard').length).toBe(0);
    expect(output.find('TeacherCard').length).toBe(0);
  });

  it('Renders PreviewCard if it is provided', () => {
    const output = shallow(<TutorialCard tutorial={tutorial} />);

    expect(output.find('PreviewCard').length).toBe(1);
  });

  it('Renders TeacherCard if it is provided', () => {
    const output = shallow(<TutorialCard tutorial={tutorial} />);

    expect(output.find('TeacherCard').length).toBe(1);
  });
});
