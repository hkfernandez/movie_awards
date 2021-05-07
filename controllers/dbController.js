const db = require("../models");

const dbControllerMethods = {
  findAll: (req, res) => {
    console.log('--------------------findAll db route hit');
    db.findAll()
      .then(returnedMovies => res.json(returnedMovies))
  },
  create: (req, res) => {
    console.log('--------------------create db route hit with req.body ', req.body);
    let nominatedMovie = req.body
    db.create(nominatedMovie)
      .then(addedMoive => {
        console.log('------------------movie added to db');
        res.json(addedMoive);
      })
  }
}

module.exports = dbControllerMethods