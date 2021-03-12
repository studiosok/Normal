import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Home from './Home';
import Behavior from './Components/Behavior';
import Aggression from './Components/Behavior/Aggression';
import Training from './Components/Training'
import Communicate from './Components/Communication'
import Nav from './Nav'
import Age from './Components/Behavior/Age'
import Lima from './Components/Training/Lima'
import Tools from './Components/Training/Tools'
import Alpha from './Components/Training/Alpha'
import Guard from './Components/Behavior/Guard'
import Social from './Components/Behavior/Social'
import Bark from './Components/Behavior/Bark'
import Play from './Components/Behavior/Play'
import Face from './Components/Communication/Face'
import Tail from './Components/Communication/Tail'
import Body from './Components/Communication/Body'

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        {/* Base Routes */}
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/behavior" component={Behavior} />
        <Route path="/training" component={Training} />
        <Route path="/language" component={Communicate} />
        {/* Behavior Routes */}
        <Route path="/aggression" component={Aggression} />
        <Route path="/guarding" component={Guard} />
        <Route path="/social" component={Social} />
        <Route path="/bark" component={Bark} />
        <Route path="/play" component={Play} />
        <Route path="/age" component={Age} />
        {/* Training Routes */}
        <Route path="/lima" component={Lima} />
        <Route path="/tools" component={Tools} />
        <Route path="/alpha" component={Alpha} />
        {/* Language Routes */}
        <Route path="/face" component={Face} />
        <Route path="/tail" component={Tail} />
        <Route path="/body" component={Body} />
      </Switch>
    </Router>
  );
};

export default Routes;
