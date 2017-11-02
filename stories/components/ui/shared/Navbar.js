import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { mount } from 'enzyme';
import { specs, describe, it } from 'storybook-addon-specifications';
import expect from 'expect';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Navbar from 'components/ui/Molecules/Navbar';

addDecorator(withKnobs);

const NavbarStories = storiesOf('Molecules/Navbar', module);

NavbarStories.addWithInfo('with title',
  'Tests that title contains our content', () => {

    const story = (
      <Navbar title={text('title', 'Dancy')} />
    );

    specs(() => describe('Navbar', () => {
      it('Should have the title', () => {
        const output = mount(story);

        expect(output.text()).toContain('Dancy');
      });
    }));

    return story;
  }
);

NavbarStories.addWithInfo(
  'with short title',
  'Has title passed in', () => (
    <Navbar title={text('title', 'Dancy')} />
  )
);

NavbarStories.addWithInfo(
  'with long title',
  'Has title passed in', () => (
    <Navbar title={text('title', 'Internationalization Title')} />
  )
);

export default NavbarStories;
