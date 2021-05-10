require('dotenv').config();
const axios = require('axios');
const apiKey = process.env.IMDB_API_KEY;

const imdbControllerMethods = {
  findMovie: (req, res, next) => {
    const userSearchString = req.body.movieName
    axios.get(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${userSearchString}`
    )
      .then(
        function (returnedMovie) {
          res.json(returnedMovie.data);
        }
      )
      .catch(err => console.log(err))
  }
}

module.exports = imdbControllerMethods