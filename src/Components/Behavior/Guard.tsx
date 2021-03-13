import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Quiz from '../Quiz/QuizBody'

const Guard = () => {
  return (
    <div className="Container">
      <div id="topBottomMargin">
      <h3>Mine: Resource Guarding</h3>
      </div>

    <div className="Main">
      <Quiz {...props}/>
    </div>
    </div>
  )

}

export default Guard
