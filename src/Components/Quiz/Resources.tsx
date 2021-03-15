import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Resources = (props: { data: any; questionId: number }) => {
  const data = props.data;
  const questionId = props.questionId

  //need to update resources to match relevent resources
  let resources = data[0].resources;

  return (
    <div>
      <h4 id="colorText">Further Facts:</h4>
      <div className="quizResources" >
        {resources.map((resource) => {
          let id = 0;
          return (
            <ul>
              <li key={id} id="whiteText"><Link to={resource.url}>{`${resource.name}`}</Link></li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Resources;
