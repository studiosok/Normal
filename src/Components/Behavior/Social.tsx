import React from 'react';
import Quiz from '../Quiz/QuizBody';

const Social = (props) => {
  return (
    <div className="Container">
      <div id="topBottomMargin">
        <h3>Socialization, Being Social, All Things Social</h3>
      </div>

      <div className="Main">
        <Quiz {...props} />
      </div>
    </div>
  );
};

export default Social;
