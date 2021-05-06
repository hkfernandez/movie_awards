require('dotenv').config()
const express = require('express');
const app = express();

const mongoose = require('mongoose')
const db = mongoose.connection;

const PORT = process.env.PORT || 3001;

const routes = require('./routes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

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