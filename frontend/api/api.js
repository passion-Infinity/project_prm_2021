const axios = require('axios');
const queryString = require('query-string');

const axiosClient = axios.create({
  baseURL: 'http://nodejs-backend3.us-east-2.elasticbeanstalk.com',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async config => {
  return config;
});

axiosClient.interceptors.response.use(response => {
  if (response && response.data) return response.data;
  return response;
});

module.exports = axiosClient;
