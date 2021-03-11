import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="Container">
      <div className="Main">
       <h1>Normal</h1>
      </div>
      <div className="Main">
        <Link to="/behavior">Behavior</Link>
      </div>
    </div>
  )

}

export default Home
