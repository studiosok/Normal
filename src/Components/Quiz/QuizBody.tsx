import React from 'react'
import PropTypes from 'prop-types'
import Question from './Question'
import Answer from './Answer'
import Resources from './Resources'
import '../../../assets/facts/language.json'


function Quiz() {
  return (
    <div className="quizBody">{}
      <Question />
      <Answer />
      <Resources />
    </div>
  )
}

// Quiz.propTypes = {
//   // answer: PropTypes.string.isRequired,
//   // answerOptions: PropTypes.array.isRequired,
//   // question: PropTypes.string.isRequired,
//   // onAnswerSelected: PropTypes.func.isRequired
// }

export default Quiz
