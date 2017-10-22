import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs';
import { addChapter, storyDecorator } from '@storybook/addon-chapters';

import { Button, Welcome } from '@storybook/react/demo';

addDecorator(withKnobs);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .storyDecorator(withKnobs)
  .addChapter('Test', () => <h1>Text</h1>)
  .addWithInfo(
    'with text',
    'Simple button with text', () => (
      <Button
        onClick={action('clicked')}
        disabled={boolean('Disabled', true)}
        style={{ backgroundColor: color('Background color', '#BADASS') }}
      >
        { text('Button label', 'Hello, Button') }
      </Button>
    )
  )
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
