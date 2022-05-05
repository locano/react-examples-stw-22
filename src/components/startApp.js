import React from 'react';

import './startApp.css';

const message = 'Welcome To React Simple Component!';
class StartApp extends React.Component {
  render() {
    return <div className="font-white-xl">{message}</div>;
  }
}

export default StartApp;
