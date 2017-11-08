import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { mount, shallow } from 'enzyme';
import { specs, describe, it } from 'storybook-addon-specifications';
import expect from 'expect';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Button } from 'components/ui/Atoms/Button';
import { testik } from 'components/ui/Atoms/Button.spec.js';

addDecorator(withKnobs);

const ButtonStories = storiesOf('Atoms/Buttons', module);

ButtonStories.addWithInfo('default',
  'Button has `Submit` text if no text provided',
  () => {
    const story = (
      <Button />
    );

    specs(() => testik);

    return story;
  }
);

ButtonStories.addWithInfo('with other className',
  'Button applies classNames if they are provided in props',
  () => {
    const story = (
      <Button text='Cmon!' className='warning' />
    );

    specs(() => describe('Button', () => {
      it('Should have `warning` className', () => {
        const output = shallow(story);

        expect(output.find('button.warning').exists()).toBe(true);
      });
    }));

    return story;
  }
);

export default ButtonStories;
