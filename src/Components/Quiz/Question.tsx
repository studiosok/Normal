import React from 'react';

const Question = (props: { data: any, questionId: number }) => {
  const data = props.data;
  let questionId = props.questionId

  return (
    <div>
      <div className="quizImage">
        <img src={data[questionId].imageUrl} className="quizImage"></img>
      </div>
      <div className="quizQuestion">
        <p id="colorText">{data[questionId].question}</p>
      </div>
    </div>
  );
};

export default Question;
