import React from 'react';
import Quiz from '../Quiz/QuizBody';

const Age = (props) => {
  return (
    <div className="Container">
      <div id="topBottomMargin">
        <h2>Behavior by Age</h2>
        <div>
        <p>~Summary text about normal behavior based on dog development stages~</p>
        </div>
      </div>

      <div className="Main">
        <Quiz {...props} />
      </div>
    </div>
  );
};

export default Age;
