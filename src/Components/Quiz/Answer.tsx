import React from 'react';

const Answer = (props: { data: any }) => {
  const data = props.data;
  let options = Array.from(data[0].answerOptions);

  options = options.map((option) => {
    return option;
  });

  return (
    <div className="quizAnswer">
      {options.map((option) => {
        return (
          <ol>
            <li key={option.id}>{`${Object.entries(option)}`}</li>
          </ol>
        );
      })}
    </div>
  );
};

export default Answer;
