import React from 'react';
import Quiz from '../Quiz/QuizBody';

const Bark = (props) => {
  return (
    <div className="Container">
      <div id="topBottomMargin">
        <h2>{'Barking & Talking Back'}</h2>
        <div>
        <p>~Summary text related to barking and verbal communication in dogs~</p>
        </div>
      </div>

      <div className="Main">
        <Quiz {...props} />
      </div>
    </div>
  );
};

export default Bark;
