const db = require("../models");

const dbControllerMethods = {
  findOne: (req, res) => {
    db.findOne()
      .then(returnedMovie => {
        res.json(returnedMovie)
      })
      .catch(err => console.log(err));
  },
  findAll: (req, res) => {
    db.find()
      .then(returnedMovies => {
        res.json(returnedMovies)
      })
      .catch(err => console.log(err));
  },
  create: (req, res) => {
    let nominatedMovie = req.body
    db.create(nominatedMovie)
      .then(addedMoive => {
        res.json(addedMoive);
      })
      .catch(err => console.log(err));
  },
  delete: (req, res) => {
    let movieToDelete = req.body
    db.findOneAndDelete(movieToDelete)
      .then(deletedMoive => {
        res.json(deletedMoive);
      })
      .catch(err => console.log(err));
  }
}

module.exports = dbControllerMethods