const axiosClient = require('./api');

class SchoolApi {
  getAll(params) {
    return axiosClient.get('/api/v1/schools', {params});
  }
}

const schoolApi = new SchoolApi();
module.exports = schoolApi;
