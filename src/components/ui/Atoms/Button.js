import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

export const Button = ({text, ...rest}) => (
  <button {...rest}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func
};

Button.defaultProps = {
  text: 'Submit',
  className: 'primary',
  disabled: false,
  onSubmit: null
};

