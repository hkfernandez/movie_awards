//const db = require("../models");
require('dotenv').config();
const axios = require('axios');
const apiKey = process.env.IMDB_API_KEY;
//const unpack = (data) => JSON.parse(JSON.stringify(data));

const imdbControllerMethods = {
  findMovie: (req, res) => {
    console.log('--------------------findMovie route hit');
    console.log('--------------------req.body ', req.body);
    const userSearchString = req.body.movieTitle
    axios.get(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${userSearchString}`
    )
    //.then(
    //  function (returnedMovie) {
    //    res.send(returnedMovie.data)
    //  }
    //)
  }
}

module.exports = imdbControllerMethods