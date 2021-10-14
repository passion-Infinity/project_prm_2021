const axiosClient = require('./api');

class RegionApi {
  getAll() {
    return axiosClient.get('/api/v1/regions');
  }
}

const regionApi = new RegionApi();
module.exports = regionApi;
