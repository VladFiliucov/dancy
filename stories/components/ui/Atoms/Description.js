import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { mount, shallow } from 'enzyme';
import { specs, describe, it } from 'storybook-addon-specifications';
import expect from 'expect';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Description from 'components/ui/Atoms/Description';
import { descriptionSpecs } from 'components/ui/Atoms/Description/Description.spec.js';

addDecorator(withKnobs);

const DescriptionStories = storiesOf('Atoms/Description', module);

DescriptionStories.addWithInfo('default',
  'Description provides `No Description` text if none provided',
  () => {
    const story = (
      <Description />
    );

    specs(() => descriptionSpecs);

    return story;
  }
);

DescriptionStories.addWithInfo('with text',
  'Displays content of text prop if it is passed in',
  () => {
    const story = (
      <Description text={
        text('Description label', 'Some text to be rendered in desc')
      } />
    );

    specs(() => descriptionSpecs);

    return story;
  }
);

export default DescriptionStories;
