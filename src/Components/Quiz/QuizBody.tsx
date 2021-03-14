import React from 'react';
import Question from './Question';
import Answer from './Answer';
import Resources from './Resources';
import langData from '../../../assets/facts/language';
import beData from '../../../assets/facts/behavior';
import trainData from '../../../assets/facts/training';

const Quiz = (props: { location: any; data: any; questionId: number }) => {
  let currentLocation = props.location.pathname;

  // console.log('props location ', props)

  let data = props.data;
  let max = 6

  const getQuestionId = (max) => {
    let questionId = Math.floor(Math.random() * Math.floor(max))
    return questionId
  }

  let questionId = getQuestionId(max)

  // console.log('current location ', currentLocation)

  const setData = () => {
    switch (currentLocation) {
    //Language Data
      case '/face':
        return data = langData.data;
      case '/body':
        return data = langData.data;
      case '/tail':
        return data = langData.data;
    //Behavior Data
      case '/aggression':
        return data = beData.data;
      case '/guarding':
        return data = beData.data;
      case '/social':
        return data = beData.data;
      case '/bark':
        return data = beData.data;
      case '/play':
        return data = beData.data;
      case '/age':
        return data = beData.data;
    //Training Data
      case '/lima':
        return data = trainData.data;
      case '/tools':
        return data = trainData.data;
      case '/alpha':
        return data = trainData.data;
      default:
        return data = langData.data;
    }
  };
  setData()

  return (

    <div className="quizBody">
      <Question  data={data} questionId={questionId}/>
      <Answer data={data} questionId={questionId}/>
      <Resources data={data} questionId={questionId}/>
    </div>
  );
};

export default Quiz;
