import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from 'startup/App';
import { tutorials } from 'static/db.js';

export default (req, res) => {
  const content = ReactDOMServer.renderToString(
    <App tutorials={tutorials} />
  );

  res.status(200);
  res.render(
    'index',
    { content }
  );
};
