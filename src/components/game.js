import React from 'react';

import './game.css';
import Square from './square';

class Board extends React.Component {
  render() {
    const turn = 'Next Player: ';

    return (
      <>
        <div className="turn">{turn}</div>

        <div className="row">
          <Square />
          <Square />
          <Square />
        </div>

        <div className="row">
          <Square />
          <Square />
          <Square />
        </div>

        <div className="row">
          <Square />
          <Square />
          <Square />
        </div>
      </>
    );
  }
}

export default Board;
