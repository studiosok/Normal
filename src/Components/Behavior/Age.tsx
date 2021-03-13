import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Quiz from '../Quiz/QuizBody'

const Age = (props) => {

  return (
    <div className="Container">
      <div id="topBottomMargin">
      <h3>Behavior by Age</h3>
      </div>

    <div className="Main">
      <Quiz {...props}/>
    </div>
    </div>
  )

}

export default Age
