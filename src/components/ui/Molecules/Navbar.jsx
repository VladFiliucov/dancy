import React, { Component } from 'react';

import './Navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li><a className="active" href="#home">{this.props.title}</a></li>
        </ul>
      </div>
    );
  }
}

