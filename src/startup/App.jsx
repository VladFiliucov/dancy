import React, { Component } from 'react';
import { Button } from 'components/ui/Atoms/Button';
import TutorialList from 'components/ui/Templates/TutorialList';

import { tutorials } from 'static/db.js';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TutorialList tutorials={tutorials} />
      </div>
    );
  }
}
