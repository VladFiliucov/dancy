import React from 'react';
import PropTypes from 'prop-types';

import styles from './TutorialList.css';

import TutorialCard from 'components/ui/Organisms/TutorialCard';

const TutorialList = ({tutorials}) => (
  tutorials
    .map(tutorial => <TutorialCard key={tutorial.id} tutorial={tutorial} />)
);

export default TutorialList;
