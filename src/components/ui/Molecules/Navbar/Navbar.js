import React from 'react';
import PropTypes from 'prop-types';

import './Navbar.css';

const Navbar = ({ title }) => (
  <div>
    <ul>
      <li><a className="active" href="#home">{title}</a></li>
    </ul>
  </div>
);

Navbar.defaultProps = {
  title: 'Dancy'
};

Navbar.propTypes = {
  title: PropTypes.string
};

export default Navbar;
