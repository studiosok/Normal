import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Quiz from '../Quiz/QuizBody'

const Body = () => {
  return (
    <div className="Container">
      <div id="topBottomMargin">
      <h3>The Whole Body</h3>
      </div>

    <div className="Main">
      <Quiz />
    </div>
    </div>
  )

}

export default Body
