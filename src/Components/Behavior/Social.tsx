import React from 'react';
import Quiz from '../Quiz/QuizBody';

const Social = (props) => {
  return (
    <div className="Container">
      <div id="topBottomMargin">
        <h2>Being Social</h2>
        <div>
        <p>~Summary text about what is actually normal in how dogs socialize~</p>
        </div>
      </div>

      <div className="Main">
        <Quiz {...props} />
      </div>
    </div>
  );
};

export default Social;
