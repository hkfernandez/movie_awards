const router = require("express").Router();
const imdb = require("../controllers/imdbController");


router.route("/findMovie")
  .post(imdb.findMovie)

module.exports = router;