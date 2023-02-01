//this will require the needed modules
require("dotenv").config();
const express = require("express");
const app = express();
//homepage route
app.get("/", (req, res) => {
  res.send("Hello world!");
});
//404 route BELOW homepage so doesnt overwrite it
app.get("*", (req, res) => {
  //the .status(404) makes it legit return an error code
  res.status(404).send(<h1>ERORR 404: PAGE NOT FOUND</h1>);
});
app.listen(process.env.PORT);
