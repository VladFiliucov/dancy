import React, { Component } from 'react';
import { Button } from 'components/ui/Atoms/Button';
import Image from 'components/ui/Atoms/Image';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Clicked")
  }

  render() {
    return (
      <div>
        <h1>This is working now</h1>
        <div>
          <Button disabled={true} onClick={this.handleClick} />
          <Image />
        </div>
      </div>
    );
  }
}
