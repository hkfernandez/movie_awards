const axios = require('axios');

const dbCalls = {
  //findOne: (movieId) => {
  //  //console.log('------------------dbCalls util fired with FindOne', movieId);
  //  return axios.get('/db/findOne/', { imdbID: movieId });
  //},
  findAll: () => {
    //console.log('------------------dbCalls util fired with FindAll');
    return axios.get('/db/findAll');
  },
  addMovie: (nominatedMovieData) => {
    //console.log('------------------dbCalls util fired with addMovie with data', nominatedMovieData);
    return axios.post('/db/addMovie', nominatedMovieData);
  },
  deleteMovie: (movieId) => {
    //console.log('------------------dbCalls util fired with delete Movie with data', movieId);
    return axios.post('/db/deleteMovie', movieId);
  }
}

module.exports = dbCalls