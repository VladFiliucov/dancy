import React, { Component } from 'react';
import { Button } from 'components/ui/Atoms/Button';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>This is working now</h1>
        <div>
          <Button />
        </div>
      </div>
    );
  }
}
