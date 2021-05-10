const axios = require('axios');

const dbCalls = {
  findAll: () => {
    return axios.get('/db/findAll');
  },
  addMovie: (nominatedMovieData) => {
    return axios.post('/db/addMovie', nominatedMovieData);
  },
  deleteMovie: (movieId) => {
    return axios.post('/db/deleteMovie', movieId);
  }
}

module.exports = dbCalls