import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Styles/FeeDetails.css';

const FeeDetails = () => {
  const [excelData, setExcelData] = useState([]);
  const [error, setError] = useState('');
  const [search, setSearch] = useState({ type: 'name', value: '' });
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const apiUrl = process.env.REACT_APP_API_URL || 'https://school-backend-mhht.onrender.com';

  const fetchData = useCallback(async (params = {}) => {
    try {
      const response = await axios.get(`${apiUrl}/student/search`, { params });
      setExcelData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
    }
  }, [apiUrl]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSearch = () => {
    const params = { [search.type]: search.value };
    fetchData(params);
  };

  const handleGoHome = () => navigate('/');
  const handleGoGallery = () => navigate('/gallery');

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
            value={search.type}
            onChange={(e) => setSearch({ ...search, type: e.target.value })}
          >
            <option value="name">Name</option>
            <option value="class">Class</option>
            <option value="village">Village</option>
            <option value="fatherName">Father Name</option>
          </select>
          <input
            type="text"
            value={search.value}
            onChange={(e) => setSearch({ ...search, value: e.target.value })}
            placeholder={`Enter ${search.type}`}
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
