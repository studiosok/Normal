import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Quiz from '../Quiz/QuizBody'

const Face = (props) => {


  return (
    <div className="Container">
      <div id="topBottomMargin">
      <h3>Face Talk</h3>
      </div>

    <div className="Main">
      <Quiz {...props}/>
    </div>
    </div>
  )

}

export default Face
