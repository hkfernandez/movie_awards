require('dotenv').config()
const express = require('express');
const app = express();

const mongoose = require('mongoose')
const db = mongoose.connection;

const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connect to database
mongoose.connect('mongodb://localhost/movie_awards', { useNewUrlParser: true, useUnifiedTopology: true });
//verify the database connection
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function () {
  console.log('Connected to mongoDB!');
});

app.listen(PORT, () =>
  console.log('listening on port ', PORT)
)