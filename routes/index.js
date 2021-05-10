const router = require("express").Router();
const imdbRoutes = require('./imdbRoutes');
const dbRoutes = require('./dbRoutes');
const path = require('path');

router.use("/imdb", imdbRoutes);
router.use("/db", dbRoutes);

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router