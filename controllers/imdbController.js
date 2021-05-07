//const db = require("../models");
require('dotenv').config();
const axios = require('axios');
const apiKey = process.env.IMDB_API_KEY;
//const unpack = (data) => JSON.parse(JSON.stringify(data));

const imdbControllerMethods = {
  findMovie: (req, res, next) => {
    //console.log('--------------------findMovie route hit');
    //console.log('--------------------req.body ', req.body);
    const userSearchString = req.body.movieName
    //console.log('---------------------', userSearchString);
    axios.get(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${userSearchString}`
    )
      .then(
        function (returnedMovie) {
          //console.log('--------------------returned movie title ', returnedMovie.data.Title);
          res.json(returnedMovie.data);
        }
      )
  }
}

module.exports = imdbControllerMethods