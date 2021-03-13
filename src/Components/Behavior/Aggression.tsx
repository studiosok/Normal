import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Quiz from '../Quiz/QuizBody';

const Aggression = (props) => {
  return (
    <div className="Container">
      <div id="topBottomMargin">
        <h3>Normal Aggression</h3>
        <p>
          Most dogs are normal. For real. All dogs display aggression. Very few
          dogs display <em>abnormal</em> aggression.
        </p>
      </div>

      <div className="Main">
        <Quiz {...props} />
      </div>
    </div>
  );
};

export default Aggression;
