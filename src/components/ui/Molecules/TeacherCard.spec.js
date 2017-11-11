import React from 'react';
import expect from 'expect';
import { shallow, configure  } from 'enzyme';
import raf from 'utils/tempPolyfills';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const teacher = {
  "id": 1,
  "firstName": "Matt",
  "lastName": "Steffanina",
  "avatar": "mattStef.jpg",
  "bio": "Matt Steffanina is a world-renowned hip hop dancer and choreographer from Los Angeles.",
  "styles": "Commercial"
}

import TeacherCard from './TeacherCard.js';

export const teacherCardSpecs = describe('TeacherCard', () => {
  it('Should not render if there is not teacher provided', () => {
    const output = shallow(<TeacherCard />);

    expect(output.find('img').exists()).toBe(false);
  });

  it('Renders the TeacherCard successfully if teacher is passed in', () => {
    const output = shallow(<TeacherCard teacher={teacher} />);

    expect(output.find('div.card').exists()).toBe(true);
  });

  it('Render Teachers Name correctly', () => {
    const output = shallow(<TeacherCard teacher={teacher} />);

    expect(output.text()).toContain('Matt')
  });
});
