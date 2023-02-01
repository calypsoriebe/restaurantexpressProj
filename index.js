//this will require the needed modules
require("dotenv").config();
const express = require("express");
const app = express();

//this imports the router
// /places after app.use sets all routes in controller relative to /places so /places will be in paths within controller
app.use("/places", require("./controllers/places"));

//homepage route
app.get("/", (req, res) => {
  res.send("Hello world!");
});

//404 route BELOW homepage so doesnt overwrite it
app.get("*", (req, res) => {
  //the .status(404) makes it legit return an error code
  res.status(404).send("<h1>ERORR 404: PAGE NOT FOUND</h1>");
});

//tells app what to listen to
app.listen(process.env.PORT);
