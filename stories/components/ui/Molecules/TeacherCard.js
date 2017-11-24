import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { mount, shallow } from 'enzyme';
import { specs, describe, it } from 'storybook-addon-specifications';
import expect from 'expect';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import TeacherCard from 'components/ui/Molecules/TeacherCard';
import { teacherCardSpecs } from 'components/ui/Molecules/TeacherCard/TeacherCard.spec.js';
import { teacher, noImgTeacher } from 'static/db.js';

addDecorator(withKnobs);

const TeacherCardStories = storiesOf('Molecules/TeacherCard', module);

TeacherCardStories.addWithInfo('default',
  'Return Missing Teacher message if no teacher',
  () => {
    const story = (
      <TeacherCard />
    );

    specs(() => teacherCardSpecs);

    return story;
  }
);

TeacherCardStories.addWithInfo('with Teacher',
  'TeacherCard with Teacher passed in as a property',
  () => {
    const story = (
      <TeacherCard teacher={teacher} />
    );

    specs(() => teacherCardSpecs);

    return story;
  }
);

TeacherCardStories.addWithInfo('No image',
  'TeacherCard with No Image Teacher passed in as a property',
  () => {
    const story = (
      <TeacherCard teacher={noImgTeacher} />
    );

    specs(() => teacherCardSpecs);

    return story;
  }
);

export default TeacherCardStories;
