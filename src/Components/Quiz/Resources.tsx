import React from 'react';

const Resources = (props: { data: any }) => {
  const data = props.data;

  let resources = data[0].resources;

  return (
    <div>
      <h4>Further Facts:</h4>
      <div className="quizResources">
        {resources.map((resource) => {
          let id = 0;
          return (
            <ul>
              <li key={id}>{`${resource}`}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Resources;
