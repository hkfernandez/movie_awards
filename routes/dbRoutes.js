const router = require("express").Router();
const db = require("../controllers/dbController");


router.route("/findAll")
  .get(db.findAll);

router.route('/addMovie')
  .post(db.create);

module.exports = router;