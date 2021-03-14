import React from 'react';

const Question = (props: { data: any, questionId: number }) => {
  const data = props.data;
  let questionId = props.questionId

  console.log('image url', data[questionId].imageUrl)

  return (
    <div className="quizImage">
      <img src={data[questionId].imageUrl} className="quizImage"></img>
      <div className="quizQuestion">
        <p id="colorText">{data[questionId].question}</p>
      </div>
    </div>
  );
};

export default Question;
