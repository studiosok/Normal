import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const TrainingMenu = () => {
  return (
    <div className="scrollMenu">
      <Link to="/lima" className="navLink">LIMA</Link> <br />
      <Link to="/tools" className="navLink">Tools</Link> <br />
      <Link to="/alpha" className="navLink">Alpha Dogs</Link> <br />
    </div>
  )

}

export default TrainingMenu
