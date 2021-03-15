import React from 'react';
import HomeMenu from './Components/Home/HomeMenu';

const Home = () => {
  return (
    <div className="Container">
      <div className="Main">
        <h1>Normal</h1>
      </div>
      <div className="Main">
        <HomeMenu />
      </div>
    </div>
  );
};

export default Home;
