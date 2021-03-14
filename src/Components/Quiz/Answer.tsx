import React, { useState } from 'react';

const Answer = (props: { data: any; answer: any }) => {
  const data = props.data;
  let options = Array.from(data[0].answerOptions);
  let answer = data[0].correctAnswer;

  const [display, setDisplay] = useState("");

  const handleAnswer = (e) => {
    if (e.target.value === answer) {
      let display = (
          "Correct! For further information, browse the resources below."
      );
      setDisplay(display)
      return display
    }
    let display = (
      `${`Not quite --> The correct answer was ${answer}. For further information, browse the resources below.`}`
    );
    setDisplay(display)
    return display;
  };

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
      {display && <div id='showAnswer'>{display}</div> }
    </div>
  );
};

export default Answer;
