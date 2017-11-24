import React from 'react';
import PropTypes from 'prop-types';

import styles from './TutorialList.css';

import TutorialCard from 'components/ui/Organisms/TutorialCard';

const TutorialList = ({tutorials}) => {
  if (!tutorials) return <h1>Something went wrong!!</h1>;

  return tutorials
    .map(tutorial => <TutorialCard key={tutorial.id} tutorial={tutorial} />);
};

TutorialList.propTypes = {
  tutorials: PropTypes.arrayOf(TutorialCard.propTypes.tutorial)
};

export default TutorialList;
