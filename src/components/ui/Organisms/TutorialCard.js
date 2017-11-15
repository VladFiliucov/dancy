import React from 'react';
import PropTypes from 'prop-types';

import styles from './TutorialCard.css';

import PreviewCard from 'components/ui/Molecules/PreviewCard';
import TeacherCard from 'components/ui/Molecules/TeacherCard';
import Image from 'components/ui/Atoms/Image';

import { preview } from 'static/db.js';

const TutorialCard = ({tutorial}) => (
  <div className={styles.tutorialCard}>
    <PreviewCard preview={preview} className={styles.grid} />
    <div className={styles.grid}>
      <TeacherCard teacher={tutorial.teacher} />
    </div>
  </div>
);

export default TutorialCard;
