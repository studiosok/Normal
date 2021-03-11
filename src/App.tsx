import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../assets/icon.svg';
import './App.global.css';
import Home from './Home'
import Behavior from './Components/Behavior'
import Aggression from './Components/Aggression'


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/behavior" component={Behavior} />
        <Route path="/aggression" component={Aggression} />

      </Switch>
    </Router>
  );
}
