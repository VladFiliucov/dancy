import React from 'react';
import PropTypes from 'prop-types';

import TutorialList from 'components/ui/Templates/TutorialList';

const App = ({tutorials}) => (
  <TutorialList tutorials={tutorials} />
);

App.propTypes = {
  tutorials: PropTypes.array
};

export default App;

