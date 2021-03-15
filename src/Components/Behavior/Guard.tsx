import React from 'react';
import Quiz from '../Quiz/QuizBody';

const Guard = (props) => {
  return (
    <div className="Container">
      <div id="topBottomMargin">
        <h2>Resource Guarding</h2>
        <div>
        <p>~Summary text about resource guarding in dogs~</p>
        </div>
      </div>

      <div className="Main">
        <Quiz {...props} />
      </div>
    </div>
  );
};

export default Guard;
