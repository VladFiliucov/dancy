import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { mount, shallow } from 'enzyme';
import { specs, describe, it } from 'storybook-addon-specifications';
import expect from 'expect';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import PreviewCard from 'components/ui/Molecules/PreviewCard';
import { previewCardSpecs } from 'components/ui/Molecules/PreviewCard.spec.js';

import { preview } from 'static/db.js';

addDecorator(withKnobs);

const PreviewCardStories = storiesOf('Molecules/PreviewCard', module);

PreviewCardStories.addWithInfo('without props',
  'Handles cases when preview object is not passed in',
  () => {
    const story = (
      <PreviewCard />
    );

    specs(() => previewCardSpecs);

    return story;
  }
);

PreviewCardStories.addWithInfo('with preview object property',
  'Displayes PreviewCard if preview is passed in',
  () => {
    const story = (
      <PreviewCard preview={preview} />
    );

    specs(() => previewCardSpecs);

    return story;
  }
);

export default  PreviewCardStories;
