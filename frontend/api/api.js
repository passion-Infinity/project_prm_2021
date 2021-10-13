import axios from 'axios';

export default axios.create({
  baseURL: 'http://nodejs-backend3.us-east-2.elasticbeanstalk.com',
});
