import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Styles/RegistrationPage.css';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleRegister = async (e) => {
    e.preventDefault();

    // Reset previous error messages
    setPasswordError('');
    setRegistrationError('');
    setRegistrationMessage('');

    // Check password requirements
    if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setPasswordError('Password must be at least 8 characters long and contain at least one special character.');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      return;
    }

    try {
      // Check if email already exists
      const emailResponse = await axios.get(`https://school-backend-mhht.onrender.com/user/check-email?email=${email}`);
      if (emailResponse.data.exists) {
        setRegistrationError('Email already exists. Please use a different email.');
        return;
      }

      // Register user
      await axios.post("https://school-backend-mhht.onrender.com/user/register", { email, name, password });
      setRegistrationMessage('You have been registered successfully! Redirecting to login page...');
      setTimeout(() => {
        navigate('/login/student');
      }, 3000);

    } catch (error) {
      console.error('Error during registration:', error);
      setRegistrationError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="registration-page">
      <div className="registration">
        <div className="registration-form">
          <h2>Registration</h2>
          <form onSubmit={handleRegister}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required value={email} onChange={e => setEmail(e.target.value)} /><br />
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required value={name} onChange={e => setName(e.target.value)} /><br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required value={password} onChange={e => setPassword(e.target.value)} /><br />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} /><br />
            <button type="submit" className="register-button">Register</button>
          </form>
          {passwordError && <p className="error-message">{passwordError}</p>}
          {registrationError && <p className="error-message">{registrationError}</p>}
          {registrationMessage && <p className="registration-success">{registrationMessage}</p>}
          <p>Already registered? <Link to="/login/student">Login as Student</Link></p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
