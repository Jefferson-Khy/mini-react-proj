import React from 'react';
import Geolocation from './Geolocation';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home-container'>
      <h1>Click the button to find where you are...</h1><br/>
      <Geolocation />
      <button id="find-me"><Link to="/another-page">Another Page</Link></button>
    </div>
  );
}

export default Home;
