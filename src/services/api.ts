import axios, { AxiosError } from 'axios';

const instance = axios.create({
  baseURL: "http://127.0.0.1:3333",
  headers:
  {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': '',
  }
})

instance.interceptors.response.use(async (response) => {
  return response.data;
}, function(err){
  if(err.response) return Promise.reject(err.response);

  return Promise.reject(err)
})

instance.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token');

  if(token){
    config.headers!.Authorization = `Bearer ${token}`;
  }

  return config;
}, function(err: AxiosError){
  if(err.response) return Promise.reject(err.response);

  return Promise.reject(err)
})



export default instance;
