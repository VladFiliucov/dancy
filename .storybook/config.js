import { configure, setAddon } from '@storybook/react';
import { describe, it } from 'storybook-addon-specifications'
import expect from 'expect'

window.describe = describe
window.it = it
window.expect = expect

import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
