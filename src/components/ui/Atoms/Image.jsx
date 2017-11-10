import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => <img {...props}/>;

Image.defaultProps = {
  alt: 'Alternative text',
  src: 'shapeOfYou.jpg',
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
