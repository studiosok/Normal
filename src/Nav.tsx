import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="navbarContainer">
      <Link to="/home">
        <button type="button">Home</button>
      </Link>
    </div>
  )
}
