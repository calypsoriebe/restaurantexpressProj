//this will require the needed modules
require("dotenv").config();
const express = require("express");
const app = express();

//express settings below
//this code is going to define the view engine (jsx)
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
//telling express what the static folder is going to be
app.use(express.static("public"));

//controllers and routes below
//this imports the router
// /places after app.use sets all routes in controller relative to /places so /places will be in paths within controller
app.use("/places", require("./controllers/places"));
//homepage route
app.get("/", (req, res) => {
  //res.send("Hello world! this is the homepage");
  //switch to render since we have the default view template also dont specify views because it knows to look in views folder since you use render method
  res.render("home");
});
//404 route BELOW homepage so doesnt overwrite it
app.get("*", (req, res) => {
  //the .status(404) makes it legit return an error code
  //res.status(404).send("<h1>ERORR 404: PAGE NOT FOUND</h1>");
  //switch to render like with homepage view
  res.render("errorCode");
});
//tells app what to listen to
app.listen(process.env.PORT);
