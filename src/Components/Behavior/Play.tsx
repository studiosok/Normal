import React from 'react';
import Quiz from '../Quiz/QuizBody';

const Play = (props) => {
  return (
    <div className="Container">
      <div id="topBottomMargin">
        <h2>Play Behaviors</h2>
        <div>
        <p>~Summary text about normal play behaviors~</p>
        </div>
      </div>

      <div className="Main">
        <Quiz {...props} />
      </div>
    </div>
  );
};

export default Play;
