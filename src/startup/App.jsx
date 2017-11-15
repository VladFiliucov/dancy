import React, { Component } from 'react';
import { Button } from 'components/ui/Atoms/Button';
import TutorialCard from 'components/ui/Organisms/TutorialCard';

import { tutorial } from 'static/db.js';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>This is working now</h1>
        <div>
          <TutorialCard tutorial={tutorial} />
        </div>
      </div>
    );
  }
}
