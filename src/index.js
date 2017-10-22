import React from 'react';
import ReactDOM from 'react-dom';

const rootEl = document.getElementById('app');

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>This is working now</h1>
    );
  }
}

ReactDOM.render(
  <App />,
  rootEl
)
