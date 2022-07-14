import { ACCESS_TOKEN } from '@/constants/Storage';
import storage from '@/utils/storage';
import axios from 'axios';

const { getItem, location, removeAll } = storage();
const axiosClient = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (param: unknown) => JSON.stringify(param),
});
axiosClient.interceptors.request.use(
  function (config) {
    const accessToken = getItem(ACCESS_TOKEN);
    config.headers = { Authorization: `Bearer ${accessToken}` };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  async function (error) {
    const originalConfig = error.config;
    if (originalConfig.url !== '/login' && error.response) {
      if ([401, 403].includes(Number(error.response.status))) {
        if (originalConfig.retry) {
          removeAll();
          return location('/login');
        }
      }
    }

    if (error.message === 'Network Error' && error.response) {
      alert('Please check your internet connection and try again');
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
