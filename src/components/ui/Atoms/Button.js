import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.css';

const genClasses = (classModule, string) => {
  const classArray = string.split(' ');
  const arr = classArray.map(klasName => classModule[`${klasName}`]);

  return arr.join(' ');
};

export const Button = ({text, ...rest}) => (
  <button
    {...rest}
    className={genClasses(styles, rest.className)}
  >{text}</button>
);

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func
};

Button.defaultProps = {
  text: 'Submit',
  className: 'primary medium',
  disabled: false,
  onSubmit: null
};

