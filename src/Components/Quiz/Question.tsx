import React from 'react';

const Question = (props: { data: any }) => {
  const data = props.data;

console.log('question data', data)

  return (
    <div className="quizImage">
      <img src={data[0].imageUrl}></img>
      <div className="quizQuestion">
        <p>{data[0].question}</p>
      </div>
    </div>
  );
};

export default Question;
