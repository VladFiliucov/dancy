import React from 'react';
import PropTypes from 'prop-types';

import styles from './TutorialCard.css';

import PreviewCard from 'components/ui/Molecules/PreviewCard';
import TeacherCard from 'components/ui/Molecules/TeacherCard';
import Image from 'components/ui/Atoms/Image';

const TutorialCard = ({tutorial}) => {
  if (!tutorial) return 'This tutorial is not available';

  return (
    <div className={styles.tutorialCard}>
      <PreviewCard preview={tutorial.preview} className={styles.grid} />
      <div className={styles.grid}>
        <TeacherCard teacher={tutorial.teacher} />
      </div>
    </div>
  );
};

TutorialCard.propTypes = {
  tutorial: PropTypes.shape({
    preview: PreviewCard.propTypes.preview,
    teacher: PropTypes.object,
    mainVideo: PropTypes.shape({
      id: PropTypes.number,
      tutorialId: PropTypes.number,
      url: PropTypes.string
    }),
    id: PropTypes.number,
    teacherId: PropTypes.number,
    title: PropTypes.string,
    language: PropTypes.string,
    danceStyle: PropTypes.string,
    difficulty: PropTypes.string,
  })
};

export default TutorialCard;

