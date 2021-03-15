import React from 'react';
import Quiz from '../Quiz/QuizBody'




const Body = (props) => {


const changeQuestionId = () => {

}

  return (
    <div>
    <div className="Container">
      <div id="topBottomMargin">
        <h3>The Whole Body</h3>
      </div>
      <div className="Main">
       <Quiz {...props}/>
      </div>
    </div>

    </div>
  )

}

export default Body
