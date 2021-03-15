import React from 'react';
import Quiz from '../Quiz/QuizBody';

const Face = (props) => {
  return (
    <div className="Container">
      <div id="topBottomMargin">
        <h2>Face Talk</h2>
        <div>
        <p>~Summary text about body language specifically related to the face/head~</p>
        </div>
      </div>

      <div className="Main">
        <Quiz {...props} />
      </div>
    </div>
  );
};

export default Face;
