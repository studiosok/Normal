import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const HomeMenu = () => {
  return (
    <div className="Container">
      <div className="Main">
        <div className="scrollMenu">
          <Link to="/behavior" className="navLink">
            Behavior
          </Link>{' '}
          <br />
          <Link to="/training" className="navLink">
            Training
          </Link>{' '}
          <br />
          <Link to="/language" className="navLink">
            Language
          </Link>{' '}
          <br />
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
