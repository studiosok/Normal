import React, { useState, useEffect } from 'react';

const Answer = (props: { data: any; questionId: number }) => {
  const data = props.data;
  const questionId = props.questionId;

  let options = Array.from(data[questionId].answerOptions);
  let answer = data[questionId].correctAnswer;

  const [display, setDisplay] = useState('...');

  const handleAnswer = (e) => {
    if (e.target.value === answer) {
      let display =
        'Correct! For further information, browse the resources below.';
      setDisplay(display);
      return display;
    }
    let display = `${`Not quite –> The correct answer was ${answer.toUpperCase()}. For further information, browse the resources below.`}`;
    setDisplay(display);
    return display;
  };

  useEffect(() => {
    setDisplay('...')
  }, [questionId])

  return (
    <div>
      <div>
        {options.map((option) => {
          let id = 0;
          id++;
          return (
            <ol>
              <li key={id} id="boldText">
                {`${Object.keys(option)}:`}{' '}
                <button
                  className="quizButton"
                  onClick={handleAnswer}
                  value={Object.keys(option)}
                >{`${Object.values(option)}`}</button>
              </li>
            </ol>
          );
        })}
      </div>
      {display !== "..." && <div id="showAnswer">{display}</div>}
    </div>
  );
};

export default Answer;
