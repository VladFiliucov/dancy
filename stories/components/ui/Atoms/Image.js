import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { mount, shallow } from 'enzyme';
import { specs, describe, it } from 'storybook-addon-specifications';
import expect from 'expect';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Image from 'components/ui/Atoms/Image';
import { imageSpecs } from 'components/ui/Atoms/Image/Image.spec.js';

addDecorator(withKnobs);

const ImageStories = storiesOf('Atoms/Image', module);

ImageStories.addWithInfo('default',
  'Handles situation when none of the props where provided',
  () => {
    const story = (
      <Image />
    );

    specs(() => imageSpecs);

    return story;
  }
);

ImageStories.addWithInfo('with image',
  'With props',
  () => {
    const story = (
      <Image src='shapeOfYou.jpg' alt='Super Dance' />
    );

    specs(() => imageSpecs);

    return story;
  }
);

ImageStories.addWithInfo('with non existent image',
  'With props',
  () => {
    const story = (
      <Image src='does not exist' alt='Super Dance' />
    );

    specs(() => imageSpecs);

    return story;
  }
);

export default ImageStories;
