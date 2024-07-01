import React from 'react';
import './Styles/Home.css'; // Import the CSS file for styling
import Navbar from './Navbar'; // Import the Navbar component

const Home = () => {
  return (
    <div className="home-page">
      <Navbar /> {/* Add Navbar here */}
      <div className="content">
        <h1 className="welcome-message">Welcome to our School Web App</h1>
        
      </div>
    </div>
  );
}

export default Home;
