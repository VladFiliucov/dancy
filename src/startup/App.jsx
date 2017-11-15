import React, { Component } from 'react';
import { Button } from 'components/ui/Atoms/Button';
import TutorialCard from 'components/ui/Organisms/TutorialCard';
import PreviewCard from 'components/ui/Molecules/PreviewCard';

import { tutorial, preview } from 'static/db.js';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TutorialCard tutorial={tutorial} />
        <PreviewCard preview={preview} />
      </div>
    );
  }
}
