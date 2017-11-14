import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProfileImage.css';

const ProfileImage = ({src, alt}) => (
  <img src={src} alt={alt} className={styles.profileImage} />
);

ProfileImage.defaultProps = {
  src: 'user_profile.png',
  alt: 'Teachers Name'
};

ProfileImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default ProfileImage;
