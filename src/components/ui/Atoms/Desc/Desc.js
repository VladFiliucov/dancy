import React from 'react';
import PropTypes from 'prop-types';

import styles from './Desc.css';
import normalize from 'utils/normalize';

const Desc = ({text}) => <div className={styles.desc}>{normalize(text)}</div>;

Desc.propTypes = {
  text: PropTypes.string
};

Desc.defaultProps = {
  text: 'Author provided no description.'
};

export default Desc;
