import React, { useEffect, useState } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Next = (props: {questionId: number} ) => {
  let questionId = props.questionId
  const [id, setId] = useState(0)

console.log('next ran, question id is ', id)

  const updateQuestion = () => {
    console.log('inside update question', id, 'question id', questionId)
    questionId = questionId + 1
    setId(questionId)
    return questionId
  }

  useEffect(() => {
    setId(id)
    console.log('next use effect ran')
  },[questionId])

  return (

    <button className="nextArrow" onClick={updateQuestion}>{<ArrowForwardIosIcon></ArrowForwardIosIcon>}</button>
    )
}

export default Next
