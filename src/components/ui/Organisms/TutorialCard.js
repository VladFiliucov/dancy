import React from 'react';
import PropTypes from 'prop-types';

import styles from './TutorialCard.css';

import TeacherCard from 'components/ui/Molecules/TeacherCard';
import Image from 'components/ui/Atoms/Image';

const TutorialCard = ({tutorial}) => (
  <div className={styles.tutorialCard}>
    <Image src={tutorial.preview.src} />
    <TeacherCard teacher={tutorial.teacher} />
  </div>
);

export default TutorialCard;
