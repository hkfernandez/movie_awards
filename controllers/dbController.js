const db = require("../models");

const dbControllerMethods = {
  findAll: (req, res) => {
    console.log('--------------------findAll db route hit');
    db.find()
      .then(returnedMovies => {
        //console.log('------------------returned Movies', returnedMovies);
        res.json(returnedMovies)
      })
  },
  create: (req, res) => {
    console.log('--------------------create db route hit with req.body ', req.body);
    let nominatedMovie = req.body
    db.create(nominatedMovie)
      .then(addedMoive => {
        console.log('------------------movie added to db');
        res.json(addedMoive);
      })
  },
  delete: (req, res) => {
    console.log('--------------------delete db route hit with req.body ', req.body);
    let movieToDelete = req.body
    db.findOneAndDelete(movieToDelete)
      .then(deletedMoive => {
        console.log('------------------movie removed from db');
        res.json(deletedMoive);
      })
  }
}

module.exports = dbControllerMethods