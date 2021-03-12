import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const BehaviorMenu = () => {
  return (
    <div className="scrollMenu">
      <Link to="/aggression" className="navLink">Aggression</Link> <br />
      <Link to="/age" className="navLink">Age</Link> <br />
      <Link to="/guarding" className="navLink">Resource Guarding</Link> <br />
      <Link to="/social" className="navLink">Socializing</Link> <br />
      <Link to="/bark" className="navLink">Barking</Link> <br />
      <Link to="/play" className="navLink">Play</Link> <br />
    </div>
  )

}

export default BehaviorMenu
