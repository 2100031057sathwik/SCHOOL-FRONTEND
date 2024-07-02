import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Styles/FeeDetails.css';

const FeeDetails = () => {
  const [excelData, setExcelData] = useState([]);
  const [error, setError] = useState('');
  const [searchType, setSearchType] = useState('name');
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const fetchData = useCallback(async (params = {}) => {
    try {
      const response = await axios.get('https://school-backend-mhht.onrender.com/student/search', { params });
      setExcelData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
    }
  }, []);

  useEffect(() => {
    const fetchDataAndSetExcelData = async () => {
      await fetchData();
    };

    fetchDataAndSetExcelData();
  }, [fetchData]);

  const handleSearch = () => {
    const params = {
      [searchType.toLowerCase()]: searchValue
    };
    fetchData(params);
  };

  const handleGoHome = () => {
    navigate('/'); // Navigate to the home page
  };

  const handleGoGallery = () => {
    navigate('/gallery'); // Navigate to the gallery page
  };

  return (
    <div className="container">
      <header>
        <h1>School Management System</h1>
        <div className="header-buttons">
          <button className="button-86" onClick={handleGoHome}>Home</button>
          <button className="button-81" onClick={handleGoGallery}>Gallery</button>
        </div>
      </header>
      <div className="content">
        <h2>Fee Details</h2>
        {error && <div className="error">{error}</div>}
        <div className="search-form">
          <label htmlFor="searchType">Search By:</label>
          <select
            id="searchType"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value.toLowerCase())}
          >
            <option value="name">Name</option>
            <option value="class">Class</option>
            <option value="village">Village</option>
            <option value="fatherName">Father Name</option>
          </select>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={`Enter ${searchType}`} // Corrected line
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>NAME</th>
              <th>B/G</th>
              <th>F.NAME</th>
              <th>CLASS</th>
              <th>VILL</th>
              <th>BUS</th>
              <th>PH.NO</th>
              <th>S.FEE</th>
              <th>O.DUE</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {excelData.map((row, index) => (
              <tr key={index}>
                <td>{row['S.NO']}</td>
                <td>{row['NAME']}</td>
                <td>{row['B/G']}</td>
                <td>{row['F.NAME']}</td>
                <td>{row['CLASS']}</td>
                <td>{row['VILL']}</td>
                <td>{row['BUS']}</td>
                <td>{row['PH.NO']}</td>
                <td>{row['S.FEE']}</td>
                <td>{row['O.DUE']}</td>
                
                {/* Render more table cells for additional data */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeeDetails;
