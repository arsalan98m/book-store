import axios from 'axios';
import API_URLS from './api-urls';

const apiClient = (
  baseURL?: string,
  timeout?: number,
  contentType?: string,
) => {
  const defaultOptions = {
    baseURL: baseURL || API_URLS.BASE_URL,
    method: 'get',
    timeout: timeout || 30000,
    headers: {
      'Content-Type': contentType || 'application/json',
      'x-api-key': '#b0@6hX8YasCq6^unOaPw1tqR',
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the Access token for any request
  instance.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  // response interceptor
  instance.interceptors.response.use(
    config => {
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  return instance;
};

export default apiClient;
