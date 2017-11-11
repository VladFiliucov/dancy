import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { mount, shallow } from 'enzyme';
import { specs, describe, it } from 'storybook-addon-specifications';
import expect from 'expect';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import ProfileImage from 'components/ui/Atoms/ProfileImage';
import { profileImageSpecs } from 'components/ui/Atoms/ProfileImage.spec.js';

addDecorator(withKnobs);

const ProfileImageStories = storiesOf('Atoms/ProfileImage', module);

ProfileImageStories.addWithInfo('default',
  'Handles situation when none of the props where provided',
  () => {
    const story = (
      <ProfileImage />
    );

    specs(() => profileImageSpecs);

    return story;
  }
);

ProfileImageStories.addWithInfo('with image',
  'With props',
  () => {
    const story = (
      <ProfileImage src='mattStef.jpg' alt='Matt Stefanina' />
    );

    specs(() => profileImageSpecs);

    return story;
  }
);

export default ProfileImageStories;
