import React from 'react';
import Quiz from '../Quiz/QuizBody';

const Body = (props) => {
  return (
    <div>
      <div className="Container">
        <div id="topBottomMargin">
          <h2>Body Talk</h2>
          <div>
        <p>~Summary text about body language in dogs~</p>
        </div>
        </div>
        <div className="Main">
          <Quiz {...props} />
        </div>
      </div>
    </div>
  );
};

export default Body;
