import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import { specs, describe, it } from 'storybook-addon-specifications';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils';

import Navbar from 'components/ui/shared/Navbar';

export const NavbarStory = () => {
  const story = (
    <Navbar title={'Dancy'} />
  );

  specs(() => describe('Navbar', () => {
    it('Should have the title', () => {
      const output = Enzyme.mount(story);

      expect(output.text()).toContain('Dancy');
    });
  }));

  return story;
};

