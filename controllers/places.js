//creating a router
const router = require("express").Router();

//making an index page
router.get("/", (req, res) => {
  res.send("GET /places");
});

//will be exported
module.exports = router;
