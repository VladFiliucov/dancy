import React from 'react';
import PropTypes from 'prop-types';

// TODO write util function wrapping possible text

const Description = ({text}) => (
  <div>
    <p>
      <strong>Description: </strong>
      {text}
    </p>
  </div>
);

Description.defaultProps = {
  text: 'No description provided'
};

Description.propTypes = {
  text: PropTypes.string.isRequired
};

export default Description;
