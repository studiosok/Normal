import React from 'react';
import Quiz from '../Quiz/QuizBody';

const Tools = (props) => {
  return (
    <div className="Container">
      <div id="topBottomMargin">
        <h2>{'Tools & Training'}</h2>
        <div>
        <p>~Summary text about various tools used in training dogs~</p>
        </div>
      </div>

      <div className="Main">
        <Quiz {...props} />
      </div>
    </div>
  );
};

export default Tools;
