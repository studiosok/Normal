import React from 'react';
import Quiz from '../Quiz/QuizBody';

const Aggression = (props) => {
  return (
    <div className="Container">
      <div id="topBottomMargin">
        <h2>Aggression</h2>
        <div>
        <p>~Summary text about normal aggression in dogs~</p>
        </div>
      </div>


      <div className="Main">
        <Quiz {...props} />
      </div>
    </div>
  );
};

export default Aggression;
