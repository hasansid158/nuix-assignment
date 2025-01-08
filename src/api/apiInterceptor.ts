import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    config.baseURL = 'http://localhost:8080/';

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    return Promise.reject(error);
  },
);

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};

export default httpService;
