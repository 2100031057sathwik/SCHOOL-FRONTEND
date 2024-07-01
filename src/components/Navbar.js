import React from 'react';
import './Styles/Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/login/admin">Login as Admin</a></li>
        <li><a href="/login/student">Login as Student</a></li>
        <li><a href="/register">Registration</a></li>
        <li><a href="/gallery">Gallery</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
