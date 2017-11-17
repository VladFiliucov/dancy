import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { mount, shallow } from 'enzyme';
import { specs, describe, it } from 'storybook-addon-specifications';
import expect from 'expect';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import TutorialList from 'components/ui/Templates/TutorialList';
import { tutorialListSpecs } from 'components/ui/Templates/TutorialList.spec.js';

import { tutorials } from 'static/db.js';

addDecorator(withKnobs);

const TutorialListStories = storiesOf('Templates/TutorialList', module);

TutorialListStories.addWithInfo('without tutorials',
  'Displays something went wrong message if no tutorials provided',
  () => {
    const story = (
      <TutorialList />
    );

    specs(() => tutorialListSpecs);

    return story;
  }
);

TutorialListStories.addWithInfo('with tutorials array',
  'Displays correctly tutorial list if they are passed in',
  () => {
    const story = (
      <TutorialList tutorials={tutorials} />
    );

    specs(() => tutorialListSpecs);

    return story;
  }
);

export default TutorialListStories;

