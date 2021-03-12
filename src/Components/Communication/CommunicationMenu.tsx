import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const CommunicationMenu = () => {
  return (
    <div className="scrollMenu">
      <Link to="/body" className="navLink">Body</Link> <br />
      <Link to="/face" className="navLink">Face</Link> <br />
      <Link to="/tail" className="navLink">Tail</Link> <br />
    </div>
  )

}

export default CommunicationMenu
