import axios from 'axios';

// create an instance of axios
const axiosInstance = axios.create({
  baseURL: 'https://yummy-recipe-flaskapi.herokuapp.com/api/v1',
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
