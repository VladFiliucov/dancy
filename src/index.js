import React from 'react';
import ReactDOM from 'react-dom';

import { tutorials } from 'static/db.js';

import App from 'startup/App';

const rootEl = document.getElementById('app');

ReactDOM.render(
  <App tutorials={tutorials} />,
  rootEl
);

