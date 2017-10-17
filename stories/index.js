import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';

addDecorator(withKnobs);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
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
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
