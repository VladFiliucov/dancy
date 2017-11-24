import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { mount, shallow } from 'enzyme';
import { specs, describe, it } from 'storybook-addon-specifications';
import expect from 'expect';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Button from 'components/ui/Atoms/Button';
import { tests } from 'components/ui/Atoms/Button/Button.spec.js';

addDecorator(withKnobs);

const ButtonStories = storiesOf('Atoms/Buttons', module);

ButtonStories.addWithInfo('default',
  'Button has `Submit` text if no text provided',
  () => {
    const story = (
      <Button />
    );

    specs(() => tests);

    return story;
  }
);

ButtonStories.addWithInfo('with other className',
  'Button applies classNames if they are provided in props',
  () => {
    const story = [
      <Button text='Danger' className='danger small' key='buttonDanger' />,
      <hr />,
      <Button text='Warning' className='warning medium' key='buttonWarning' />,
      <hr />,
      <Button text='Success' className='success big' key='buttonSuccess' />
    ];

    specs(() => tests);

    return story;
  }
);

ButtonStories.addWithInfo('disabled',
  'Button applies disabled httml attribute if disabled prop is set to true',
  () => {
    const story = (
      <Button disabled={true} />
    );

    specs(() => tests);

    return story;
  }
);


export default ButtonStories;
