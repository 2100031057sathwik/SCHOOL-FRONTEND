// components/AdminLogin.js
import React from 'react';
const AdminLogin = () => {
  const handleDeletePicture = () => {
    // Logic to delete a picture
    alert('Picture deleted successfully!');
  }

  const handleUpdatePicture = () => {
    // Logic to update a picture
    alert('Picture updated successfully!');
  }

  return (
    <div>
      <h2>Admin Login</h2>
      <button onClick={handleDeletePicture}>Delete Picture</button>
      <button onClick={handleUpdatePicture}>Update Picture</button>
    </div>
  );
}

export default AdminLogin;
