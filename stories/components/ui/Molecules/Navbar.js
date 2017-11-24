import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { mount } from 'enzyme';
import { specs, describe, it } from 'storybook-addon-specifications';
import expect from 'expect';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Navbar from 'components/ui/Molecules/Navbar';
import { navbarSpecs } from 'components/ui/Molecules/Navbar/Navbar.spec.js';

addDecorator(withKnobs);

const NavbarStories = storiesOf('Molecules/Navbar', module);

NavbarStories.addWithInfo('with default title',
  'Tests that title has default value if it is not provided',
  () => {
    const story = (
      <Navbar title={text('title', 'Dancy')} />
    );

    specs(() => navbarSpecs);

    return story;
  }
);

NavbarStories.addWithInfo(
  'with short title',
  'Has short title passed in',
  () => {
    const story = (
      <Navbar title={text('title', 'Dancy')} />
    );

    specs(() => navbarSpecs);

    return story;
  }
);

NavbarStories.addWithInfo(
  'with long title',
  'Has title passed in',
  () => {
    const story = (
      <Navbar title={text('title', 'Internationalization Title')} />
    );

    specs(() => navbarSpecs);

    return story;
  }
);

export default NavbarStories;
