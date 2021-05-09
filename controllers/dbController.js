const db = require("../models");

const dbControllerMethods = {
  findOne: (req, res) => {
    console.log('--------------------findOne db route hit', req.body);
    db.findOne()
      .then(returnedMovie => {
        //console.log('movie returned in controller', returnedMovie);
        res.json(returnedMovie)
      })
  },
  findAll: (req, res) => {
    console.log('--------------------findAll db route hit');
    db.find()
      .then(returnedMovies => {
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
        res.json(deletedMoive);
      })
  }
}

module.exports = dbControllerMethods