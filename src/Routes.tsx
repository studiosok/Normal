import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Home from './Home';
import Behavior from './Components/Behavior';
import Aggression from './Components/Aggression';
import Nav from './Nav'
import Age from './Components/Age'

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/behavior" component={Behavior} />
        <Route path="/aggression" component={Aggression} />
        <Route path="/age" component={Age} />

      </Switch>
    </Router>
  );
};

export default Routes;
