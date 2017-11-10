import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { mount, shallow } from 'enzyme';
import { specs, describe, it } from 'storybook-addon-specifications';
import expect from 'expect';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Image from 'components/ui/Atoms/Image';
import { imageSpecs } from 'components/ui/Atoms/Image.spec.js';

addDecorator(withKnobs);

const ImageStories = storiesOf('Atoms/Image', module);

ImageStories.addWithInfo('default',
  'Image renders on the page',
  () => {
    const story = (
      <Image />
    );

    return story;
  }
);

export default ImageStories;
