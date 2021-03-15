import React from 'react';
import Quiz from '../Quiz/QuizBody';

const Tail = (props) => {
  return (
    <div className="Container">
      <div id="topBottomMargin">
        <h2>Tail Talk</h2>
        <div>
        <p>~Summary text about body language specifically related to the tail~</p>
        </div>
      </div>

      <div className="Main">
        <Quiz {...props} />
      </div>
    </div>
  );
};

export default Tail;
