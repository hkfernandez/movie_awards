const router = require("express").Router();
const db = require("../controllers/dbController");


router.route("/findOne")
  .get(db.findOne);

router.route("/findAll")
  .get(db.findAll);

router.route('/addMovie')
  .post(db.create);

router.route('/deleteMovie')
  .post(db.delete);

module.exports = router;