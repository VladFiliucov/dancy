import React from 'react';
import PropTypes from 'prop-types';

const Image = ({src, ...props}) => <img src={src} {...props}/>;

Image.defaultProps = {
  alt: 'Dancy Logo',
  src: 'dancy-logo-big.png',
  width: '362',
  height: '272'
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
};

export default Image;
