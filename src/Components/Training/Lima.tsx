import React from 'react';
import Quiz from '../Quiz/QuizBody';

const Lima = (props) => {
  return (
    <div className="Container">
      <div id="topBottomMargin">
        <h2>The Hierarchy</h2>
        <div>
        <p>~Summary text about LIMA and the humane hierarchy~</p>
        </div>
      </div>


      <div className="Main">
        <Quiz {...props} />
      </div>
    </div>
  );
};

export default Lima;
