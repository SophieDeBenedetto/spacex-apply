const express  = require("express");
const fs       = require("fs");
var bodyParser = require("body-parser");
const app      = express();

app.set("port", process.env.PORT || 3001);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if(process.env.NODE_ENV==="production") {
  app.uss(express.static("client/build"))
};

app.post("/api/astronauts", (req, res) => {
  const astronaut = req.body.astronaut;
  console.log("POST /api/astronauts");
  console.log("PARAMS:");
  console.log(astronaut);
  res.json(astronaut);
})

app.listen(app.get("port"), () => {
  console.log(`Find the server at http://localhost:${app.get("port")}`)
})
