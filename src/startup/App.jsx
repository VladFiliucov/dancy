import React from 'react';
import PropTypes from 'prop-types';

import { deadCode } from 'utils/math.js';

import TutorialList from 'components/ui/Templates/TutorialList';

const App = ({tutorials}) => (
  <TutorialList tutorials={tutorials} />
);

App.propTypes = {
  tutorials: PropTypes.array
};

export default App;

