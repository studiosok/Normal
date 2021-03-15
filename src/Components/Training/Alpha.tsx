import React from 'react';
import Quiz from '../Quiz/QuizBody';

const Alpha = (props) => {
  return (
    <div className="Container">
      <div id="topBottomMargin">
        <h2>Alpha Dogs</h2>
        <div>
        <p>~Summary text about dominance in training dogs~</p>
        </div>
      </div>


      <div className="Main">
        <Quiz {...props} />
      </div>
    </div>
  );
};

export default Alpha;
