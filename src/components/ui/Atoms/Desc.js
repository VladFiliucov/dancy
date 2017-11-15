import React from 'react';
import PropTypes from 'prop-types';

import styles from './Desc.css'

const Desc = ({text}) => <div className={styles.desc}>{text}</div>;

Desc.propTypes = {
  text: PropTypes.string
};

Desc.defaultProps = {
  text: 'Author provided no description.'
};

export default Desc;
