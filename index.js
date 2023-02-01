//this will require the needed modules
const express = require("express");

//initializes obj
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3000);
