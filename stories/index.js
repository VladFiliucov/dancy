import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { specs, describe, it } from 'storybook-addon-specifications';

import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import expect from 'expect';

import { Button, Welcome } from '@storybook/react/demo';
import App from 'startup/App';

import NavbarStories from './components/ui/shared/Navbar';
import ButtonStories from './components/ui/Atoms/Button';
import ImageStories from './components/ui/Atoms/Image';
import ProfileImageStories from './components/ui/Atoms/ProfileImage';
import DescriptionStories from './components/ui/Atoms/Description';
import TeacherCardStories from './components/ui/Molecules/TeacherCard';

configure({ adapter: new Adapter() });
addDecorator(withKnobs);

storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

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
  .add('with some emoji', () =>
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  );


storiesOf('WeolcomeButton', module).add('Hello World', function () {
  const story =
    <button onClick={action('Hello World')}>
      Hello World
    </button>;

  specs(() => describe('Hello World', function () {
    it('Should have the Hello World label', function () {
      const output = mount(story);
      expect(output.text()).toContain('Hello World');
    });
  }));

  return story;
});

storiesOf('App', module)
  .addWithInfo(
    'main heading',
    'Application main content', () => (
      <App />
    )
  );

