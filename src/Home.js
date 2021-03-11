import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import icon from '../assets/icon.svg';
import Age from './Components/Age'
import Behavior from './Components/Behavior'

const Home = () => {
  return (
    <div>
      <div className="Main">
       <h1>Normal</h1>
      </div>
      <div className="Main">
        <button>Common Behavior Questions</button>
      </div>
    </div>
  )

}

export default Home
