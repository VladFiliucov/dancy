import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { mount } from 'enzyme';
import { specs, describe, it } from 'storybook-addon-specifications';
import expect from 'expect';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Button } from 'components/ui/Atoms/Button';

addDecorator(withKnobs);

const ButtonStories = storiesOf('Atoms/Buttons', module);

ButtonStories.addWithInfo('default',
  'Button has `Submit` text if no text provided',
  () => {
    const story = (
      <Button />
    );

    specs(() => describe('Button', () => {
      it('Should have Submit text', () => {
        const output = mount(story);

        expect(output.text()).toContain('Submit');
      });
    }));

    return story;
  }
);

export default ButtonStories;
