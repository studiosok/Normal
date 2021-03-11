import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const BehaviorMenu = () => {
  return (
    <div className="scrollMenu">
      <Link to="/aggression" className="navLink">Aggression</Link> <br />
      <Link to="/age" className="navLink">Age</Link>
    </div>
  )

}

export default BehaviorMenu
