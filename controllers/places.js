//creating a router
const router = require("express").Router();
//cant figure out how to make the form render on /new for now
router.get("/", (req, res) => {
  res.render("places/forms");
});
//making an index page
router.get("/", (req, res) => {
  //local variable places will be an array of objects
  let places = [
    {
      name: "Great Wall South",
      city: "Charlotte",
      state: "North Carolina",
      cuisine: "Chinese",
      picture: "/images/greatwall.jpeg",
    },
    {
      name: "Ichiban",
      city: "Brooklyn",
      state: "New York",
      cuisine: "Japanese",
      picture: "/images/ichiban.webp",
    },
    {
      name: "Boading",
      city: "Charlotte",
      state: "North Carolina",
      cuisine: "Chinese",
      picture: "/images/baohouse.jpeg",
    },
    {
      name: "Musashi",
      city: "Charlotte",
      state: "North Carolina",
      cuisine: "Japanese",
      picture: "/images/musashis.jpeg",
    },
  ];
  //res.send("GET /places");
  //switching to render because of index view
  res.render("places/index", { places });
  //pass places into the render to allow us to use the array within the view
});

//will be exported
module.exports = router;
