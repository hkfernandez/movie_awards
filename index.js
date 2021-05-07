require('dotenv').config()
const express = require('express');
const app = express();

const mongoose = require('mongoose')
const db = mongoose.connection;

const PORT = process.env.PORT || 8080;

const routes = require('./routes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes)




//connect to database
mongoose.connect('mongodb://localhost/movie_awards', { useNewUrlParser: true, useUnifiedTopology: true });
//verify the database connection
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function () {
  console.log('Connected to mongoDB!');
});

app.get('/', function (req, res) {
  console.log('-------------------server based route working');
})

app.listen(PORT, () =>
  console.log('listening on port ', PORT)
)