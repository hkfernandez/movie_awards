const axios = require('axios');

const dbCalls = {
  findAll: () => {
    console.log('------------------dbCalls util fired with FindAll');
    return axios.get('/db/findAll')
  },
  addMovie: (nominatedMovieData) => {
    console.log('------------------dbCalls util fired with addMovie with data', nominatedMovieData);
    return axios.post('/db/addMovie', nominatedMovieData)
  }
}

module.exports = dbCalls