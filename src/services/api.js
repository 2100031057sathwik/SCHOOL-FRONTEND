import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3041', // Update with your backend server URL
  withCredentials: true,
});

export default api;
