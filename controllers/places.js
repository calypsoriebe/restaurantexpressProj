//creating a router
const router = require("express").Router();

//making an index page
router.get("/", (req, res) => {
  //local variable places will be an array of objects
  let places = [
    {
      name: "Great Wall South",
      city: "Charlotte",
      state: "North Carolina",
      cuisine: "Chinese",
      picture: "http://placekitten.com/250/250",
    },
    {
      name: "Ichiban",
      city: "Brooklyn",
      state: "New York",
      cuisine: "Japanese",
      picture: "http://placekitten.com/250/250",
    },
    {
      name: "Boading",
      city: "Charlotte",
      state: "North Carolina",
      cuisine: "Chinese",
      picture: "http://placekitten.com/250/250",
    },
    {
      name: "Musashi",
      city: "Charlotte",
      state: "North Carolina",
      cuisine: "Japanese",
      picture: "http://placekitten.com/250/250",
    },
  ];
  //res.send("GET /places");
  //switching to render because of index view
  res.render("places/index", { places });
  //pass places into the render to allow us to use the array within the view
});

//will be exported
module.exports = router;
