import React, { Component } from 'react';

import './Navbar.css';

const Navbar = ({ title }) => (
  <div>
    <ul>
      <li><a className="active" href="#home">{title}</a></li>
    </ul>
  </div>
);

export default Navbar;
