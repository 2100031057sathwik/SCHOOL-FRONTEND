import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Academic.css';

const Academic = () => {
  return (
    <div className="academic-page">
      <h2>Academic Page</h2>
      <div className="buttons-container">
        <Link to="/Studentdetails/fee">
          <button className="academic-button">Go to Fee Details</button>
        </Link>
        <Link to="/Studentdetails/exam">
          <button className="academic-button">Go to Exam Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Academic;
