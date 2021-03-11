import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import icon from '../assets/icon.svg';
import Aggression from './Aggression'
import Age from './Age'

const Behavior = () => {
  return (
    <div>
      <h1>Behavior</h1>
      <Link to="/aggression">Aggression</Link>
    </div>
  )

}

export default Behavior
