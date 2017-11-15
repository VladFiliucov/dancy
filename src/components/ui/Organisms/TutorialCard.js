import React from 'react';
import PropTypes from 'prop-types';

import styles from './TutorialCard.css';

import TeacherCard from 'components/ui/Molecules/TeacherCard';
import Image from 'components/ui/Atoms/Image';

const TutorialCard = ({tutorial}) => (
  <div className={styles.tutorialCard}>
    <div className={styles.grid}>
      <Image src={tutorial.preview.src} />
    </div>
    <div className={styles.grid}>
      <TeacherCard teacher={tutorial.teacher} />
    </div>
  </div>
);

export default TutorialCard;
