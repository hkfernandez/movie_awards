const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  imdbId: String,
  Title: String,
  Year: String,
  Poster: String,
  Actors: String,
  Plot: String
});

const Movie = mongoose.model('Movie', userSchema);

module.exports = Movie