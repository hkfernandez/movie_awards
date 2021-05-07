const axios = require('axios');

const apiCalls = {
  imdbMovieSearch: (userSearchString) => {
    console.log('------------------imdbMovieSearch util fired with userSearchString ', userSearchString);
    return axios.post('/imdb/findMovie', userSearchString)
  }
}

module.exports = apiCalls