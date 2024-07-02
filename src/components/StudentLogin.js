import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Styles/StudentLogin.css'; // Import the CSS file
import debounce from 'lodash.debounce'; // Add lodash.debounce

const StudentLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const debouncedSetEmail = debounce(setEmail, 300);
  const debouncedSetPassword = debounce(setPassword, 300);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Logging in with email:", email, "and password:", password);

    try {
      const response = await fetch("https://school-backend-mhht.onrender.com/user/login", { // Ensure this matches the route you defined
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      console.log("Response status:", response.status);
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || 'Login failed');
      }

      const data = await response.json();
      console.log("Login response:", data);
      navigate('/academic'); // Redirect to academic page after successful login
    } catch (error) {
      console.error('Error:', error);
      setLoginError(error.message || 'Invalid email or password.');
    }
  };

  return (
    <div className="login">
      <div className="login-form">
        <h2>Student Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required onChange={e => debouncedSetEmail(e.target.value)} /><br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required onChange={e => debouncedSetPassword(e.target.value)} /><br />
          <button type="submit" className="login-button">Login</button>
        </form>
        {loginError && <p className="error-message">{loginError}</p>}
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </div>
  );
};

export default StudentLoginPage;
