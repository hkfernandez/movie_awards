const axios = require('axios');

const apiCalls = {
  imdbMovieSearch: (userSearchString) => {
    return axios.post('/imdb/findMovie', userSearchString)
  }
}

module.exports = apiCalls