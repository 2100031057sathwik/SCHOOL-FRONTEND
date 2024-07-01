import axios from 'axios';

const api = axios.create({
  baseURL: 'https://school-backend-mhht.onrender.com', // Update with your backend server URL
  withCredentials: true,
});

export default api;
