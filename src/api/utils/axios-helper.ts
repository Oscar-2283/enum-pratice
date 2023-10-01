import axios from 'axios';
import { ApiType } from '@/api/lib/apiType'

const instance = axios.create({
  baseURL: ApiType.v1,
  timeout: 0,
});


export function setApiType(apiType: ApiType) {
  instance.defaults.baseURL = apiType;
}


instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('act');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;