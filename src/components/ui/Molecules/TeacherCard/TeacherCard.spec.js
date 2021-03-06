import React from 'react';
import expect from 'expect';
import { shallow, configure  } from 'enzyme';
import 'utils/tempPolyfills';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { teacher } from 'static/db.js';

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

  it('Should render Missing teacher message if no Teacher was passed in',
    () => {
      const output = shallow(<TeacherCard />);

      expect(output.text())
        .toContain('This tutorial has no teacher attached to it');
    }
  );

  it('Render Teachers Name correctly', () => {
    const output = shallow(<TeacherCard teacher={teacher} />);

    expect(output.text()).toContain('Matt');
  });
});
