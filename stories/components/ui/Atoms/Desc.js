import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { mount, shallow } from 'enzyme';
import { specs, describe, it } from 'storybook-addon-specifications';
import expect from 'expect';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Desc from 'components/ui/Atoms/Desc';
import { descSpecs, longString } from 'components/ui/Atoms/Desc/Desc.spec.js';

addDecorator(withKnobs);

const DescStories = storiesOf('Atoms/Desc', module);

DescStories.addWithInfo('default',
  'Description provides `No Description` text if none provided',
  () => {
    const story = (
      <Desc />
    );

    specs(() => descSpecs);

    return story;
  }
);

DescStories.addWithInfo('with description',
  'Displays content of text prop if it is passed in',
  () => {
    const story = (
      <Desc text={
        text('Description label', 'Description for PreviewCard component')
      } />
    );

    specs(() => descSpecs);

    return story;
  }
);

DescStories.addWithInfo('text longer then 150 symbols',
  'Wraps content and displays ... where string is normalized',
  () => {
    const story = (
      <Desc text={longString} />
    );

    specs(() => descSpecs);

    return story;
  }
);

export default DescStories;
