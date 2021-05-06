const router = require("express").Router();
const imdbRoutes = require('./imdbRoutes');
const path = require('path');

router.use("/imdb", imdbRoutes);

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router