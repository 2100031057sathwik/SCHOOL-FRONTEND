import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Styles/RegistrationPage.css';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({ email: '', name: '', password: '', confirmPassword: '' });
  const [error, setError] = useState({ password: '', registration: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { email, name, password, confirmPassword } = formData;
    setError({ password: '', registration: '' });
    setMessage('');

    if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError({ ...error, password: 'Password must be at least 8 characters long and contain at least one special character.' });
      return;
    }

    if (password !== confirmPassword) {
      setError({ ...error, password: 'Passwords do not match.' });
      return;
    }

    try {
      const emailResponse = await axios.get(`/user/check-email?email=${email}`);
      if (emailResponse.data.exists) {
        setError({ ...error, registration: 'Email already exists. Please use a different email.' });
        return;
      }

      await axios.post("/user/register", { email, name, password });
      setMessage('You have been registered successfully! Redirecting to login page...');
      setTimeout(() => {
        navigate('/login/student');
      }, 3000);

    } catch (error) {
      console.error('Error during registration:', error);
      setError({ ...error, registration: 'Registration failed. Please try again.' });
    }
  };

  return (
    <div className="registration-page">
      <div className="registration">
        <div className="registration-form">
          <h2>Registration</h2>
          <form onSubmit={handleRegister}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} /><br />
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} /><br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required value={formData.password} onChange={handleInputChange} /><br />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required value={formData.confirmPassword} onChange={handleInputChange} /><br />
            <button type="submit" className="register-button">Register</button>
          </form>
          {error.password && <p className="error-message">{error.password}</p>}
          {error.registration && <p className="error-message">{error.registration}</p>}
          {message && <p className="registration-success">{message}</p>}
          <p>Already registered? <Link to="/login/student">Login as Student</Link></p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
