import React, { useEffect, useState } from 'react';
import Question from './Question';
import Answer from './Answer';
import Resources from './Resources';
import langData from '../../../assets/facts/language';
import beData from '../../../assets/facts/behavior';
import trainData from '../../../assets/facts/training';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Quiz = (props: { location: any; data: any; questionId: number }) => {
  let currentLocation = props.location.pathname;
  let data = props.data;
  let questionId = props.questionId || 1;
  const [id, setId] = useState(1);

  let dataLength = 9;

  const updateQuestion = () => {
    if (id < dataLength) {
      questionId = id + 1;
      setId(questionId);
      return questionId;
    }
    questionId = 1;
    setId(questionId);
    return questionId;
  };

  useEffect(() => {
    setId(id);
  }, [questionId]);

  const setData = () => {
    switch (currentLocation) {
      //Language Data
      case '/face':
        return (data = langData.data);
      case '/body':
        return (data = langData.data);
      case '/tail':
        return (data = langData.data);
      //Behavior Data
      case '/aggression':
        return (data = beData.data);
      case '/guarding':
        return (data = beData.data);
      case '/social':
        return (data = beData.data);
      case '/bark':
        return (data = beData.data);
      case '/play':
        return (data = beData.data);
      case '/age':
        return (data = beData.data);
      //Training Data
      case '/lima':
        return (data = trainData.data);
      case '/tools':
        return (data = trainData.data);
      case '/alpha':
        return (data = trainData.data);
      default:
        return (data = langData.data);
    }
  };
  setData();

  return (
    <div className="Main">
      <div className="Container" id="topBottomMargin">
        <button className="nextArrow" onClick={updateQuestion}>
          {<ArrowForwardIosIcon></ArrowForwardIosIcon>}
        </button>
      </div>
      <div className="Center">
        <div className="quizBody">
          <Question data={data} questionId={id} />
          <Answer data={data} questionId={id} />
          <Resources data={data} questionId={id} />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
