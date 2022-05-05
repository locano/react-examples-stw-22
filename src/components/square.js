import React from 'react';

class Square extends React.Component {
  render() {
    return <button type="button" className="squareBtn" onClick={function () { alert('click'); }}>{/* DO SOMETHING */}</button>;
  }
}

export default Square;
