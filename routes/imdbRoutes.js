const router = require("express").Router();
const imdb = require("../controllers/imdbController");

router.route("/findMovie")
  .post(
    (req, res) => {
      console.log('-----------------findMovieRoute hit');
      console.log('-----------------req.body ', req.body);
    }
    //imdb.findMovie
  )

module.exports = router;