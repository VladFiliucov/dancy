import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { mount, shallow } from 'enzyme';
import { specs, describe, it } from 'storybook-addon-specifications';
import expect from 'expect';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import TutorialCard from 'components/ui/Organisms/TutorialCard';
import { tutorialCardSpecs } from 'components/ui/Organisms/TutorialCard.spec.js';

import { tutorial, tutorialNoTeacher } from 'static/db.js';

addDecorator(withKnobs);

const TutorialCardStories = storiesOf('Organisms/TutorialCard', module);

TutorialCardStories.addWithInfo('without props',
  'Handles cases when teacher object is not passed in',
  () => {
    const story = (
      <TutorialCard />
    );

    specs(() => tutorialCardSpecs);

    return story;
  }
);

TutorialCardStories.addWithInfo('with valid tutorial property',
  'Renders TutorialCard correctly if tutorial is passed in',
  () => {
    const story = (
      <TutorialCard tutorial={tutorial} />
    );

    specs(() => tutorialCardSpecs);

    return story;
  }
);

TutorialCardStories.addWithInfo('with no teacher tutorial',
  'Renders TutorialCard even if teacher has not image',
  () => {
    const story = (
      <TutorialCard tutorial={tutorialNoTeacher} />
    );

    specs(() => tutorialCardSpecs);

    return story;
  }
);
