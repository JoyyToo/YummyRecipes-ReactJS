import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:5000/api/v1',
  headers: { 
    'Content-Type': 'multipart/form-data', Authorization: `Bearer ${localStorage.getItem('token')}` },
});

axiosInstance.interceptors.request.use((config) => {
  if (localStorage.getItem('token') && config.headers.Authorization === 'Bearer null') {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return config;
});

export default axiosInstance;